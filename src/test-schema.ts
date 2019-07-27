import { graphql, buildSchema } from 'graphql';

var schema = buildSchema(`
type Mutation {
  addTodo(newTodo: NewTodoInput!): Todo!
  addTodos(newTodos: [NewTodoInput!]!): [Todo!]!
}

input NewTodoInput {
  name: String!
  isComplete: Boolean!
}

type Query {
  todo(name: String!): Todo
  todos: [Todo!]!
}

type Todo {
  name: String!
  isComplete: Boolean!
}
`);

type Todo = {
  name: string;
  isComplete: boolean;
};

const getDefaultTodos = () => [
  {
    name: 'Brush Teeth',
    isComplete: true,
  },
];

class FakeDB {
  private todos: Todo[] = [];
  constructor() {
    this.todos = getDefaultTodos();
  }
  getTodos() {
    return this.todos;
  }
  getTodoByName(name: string) {
    return this.todos.find(todo => todo.name === name);
  }
  addTodo(newTodo: Todo) {
    this.todos.push(newTodo);
    return newTodo;
  }
  addTodos(newTodos: Todo[]) {
    this.todos = this.todos.concat(newTodos);
    return newTodos;
  }
  reset() {
    this.todos = getDefaultTodos();
  }
}

const fakeDB = new FakeDB();

var root = {
  todos: () => {
    return fakeDB.getTodos();
  },
  todo: ({ name }: { name: string }): Todo | undefined => {
    return fakeDB.getTodoByName(name);
  },
  addTodo: ({ newTodo }: { newTodo: Todo }) => {
    return fakeDB.addTodo(newTodo);
  },
  addTodos: ({ newTodos }: { newTodos: Todo[] }) => {
    return fakeDB.addTodos(newTodos);
  },
};

export const resetTestDB = () => {
  fakeDB.reset();
};

export const queryTestSchema = async (query: string) => {
  try {
    return await graphql(schema, query, root);
  } catch (err) {
    console.error(err);
  }
};
