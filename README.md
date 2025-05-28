# Quasar Vue.js Project Setup

## Requirements

* Node.js (v16.x or newer recommended)
* npm or yarn
* Quasar CLI

## Getting Started

### Clone the Repository

Clone the project to your local machine:

```bash
git clone <repository-url>
cd <project-directory>
```

### Install Dependencies

Run the following command to install all necessary dependencies:

```bash
npm install
# or using yarn
yarn
```

### Running the Application

To run the application in development mode:

```bash
quasar dev
```

The application should now be accessible at:

```
http://localhost:9000
```

### Building for Production

To build the project for production:

```bash
quasar build
```

Production files will be generated in:

```
dist/spa
```

## Configuration

Modify Quasar and Vue.js settings in:

```
quasar.conf.js
```

Example configuration adjustments:

```javascript
module.exports = function (ctx) {
  return {
    supportTS: false,
    boot: [
      'axios'
    ],
    css: [
      'app.scss'
    ],
    build: {
      vueRouterMode: 'hash',
    },
  }
}
```

## Using an IDE

Recommended IDEs:

* Visual Studio Code
* WebStorm

## Troubleshooting

If you encounter problems:

* Ensure dependencies are up-to-date:

```bash
npm update
```

* Clear npm cache if necessary:

```bash
npm cache clean --force
```

* Rebuild the project:

```bash
quasar clean
quasar dev
```
