# Todo App with Atomic Design Architecture

This project is a simple Todo application built with React and Vite, following the principles of Atomic Design. Atomic Design is a methodology for creating design systems by breaking down a design into its smallest parts (atoms) and combining them to form more complex components (molecules, organisms, templates, and pages).

## Project Structure

The project is structured as follows:

```bash
src/
 /components
  /atoms
   /button
   /checkbox
   /link
   /textarea
  /molecules
   /add-todo-form
   /todo-item
   /todo-list
  /organisms
   /footer
   /header
  /pages
   /home
  /templates
   /todos-template
```

### Components

#### Atoms

Atoms are the basic building blocks of the design system. They are the smallest possible components, such as buttons, inputs, labels, etc.

- **Button**: A simple button component.
- **Checkbox**: A checkbox input component.
- **Link**: A hyperlink component.
- **Textarea**: A textarea input component.

#### Molecules

Molecules are slightly more complex components that are formed by combining atoms. They can be considered as a group of atoms functioning together as a unit.

- **AddTodoForm**: A form for adding new todo items, consisting of atoms like input fields and buttons.
- **TodoItem**: A single todo item component, made up of atoms like checkboxes and text.
- **TodoList**: A list of todo items, utilizing the TodoItem molecule.

#### Organisms

Organisms are more complex components that consist of molecules and/or atoms. They form distinct sections of an interface.

- **Footer**: The footer section of the application.
- **Header**: The header section of the application.

#### Templates

Templates are page-level components that place organisms, molecules, and atoms together to form the layout of a page.

- **TodosTemplate**: The main template for displaying the todo list, incorporating organisms like the header and footer and molecules like the todo list.

#### Pages

Pages are specific views or screens of the application. They use templates to display the final layout and content.

- **Home**: The home page of the application, using the TodosTemplate to display the todo list.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ceduardogodoi/arke
```

2. Navigate to the project directory:

```bash
cd arke
```

3. Install the dependencies:

```bash
npm i
```

### Running the App

To start the development server:

```bash
npm run dev
```

Open your browser and visit <http://localhost:5173> to see the app in action.

### Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### License

This project is licensed under the MIT License

### Acknowledgements

- [Atomic Design](https://atomicdesign.bradfrost.com/) by Brad Frost
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
