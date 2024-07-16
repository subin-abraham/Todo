<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Angular 17 Todo Application</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
        }
        h1 {
            color: #333;
            border-bottom: 1px solid #ccc;
            padding-bottom: 5px;
        }
        pre {
            background-color: #f4f4f4;
            padding: 10px;
            border: 1px solid #ddd;
            white-space: pre-wrap;
            overflow-wrap: break-word;
        }
    </style>
</head>
<body>
    <h1>Angular 17 Todo Application</h1>

    <p>This project is a simple Todo application built using Angular 17 and utilizes JSON Server as a mock backend for managing Todo items.</p>

    <h2>Prerequisites</h2>
    <ul>
        <li>Node.js (v14.x or higher)</li>
        <li>Angular CLI (v17.x or higher)</li>
        <li>npm (v6.x or higher)</li>
        <li>JSON Server (for mock backend)</li>
    </ul>

    <h2>Getting Started</h2>

    <h3>Installing JSON Server</h3>
    <pre>npm install -g json-server</pre>

    <h3>Setting Up the Angular Application</h3>
    <pre>
git clone &lt;repository-url&gt;
cd angular-todo-app
npm install
    </pre>

    <h2>Running JSON Server</h2>
    <pre>json-server --watch db.json</pre>

    <p>This command starts JSON Server with the <code>db.json</code> file as the database. By default, it runs on <code>http://localhost:3000</code>.</p>

    <h2>Running the Angular Application</h2>
    <pre>ng serve</pre>

    <p>Navigate to <code>http://localhost:4200/</code> in your web browser. The app will automatically reload if you change any of the source files.</p>

    <h2>Using the Todo Application</h2>
    <p>Once both JSON Server and Angular development server are running, you can use the Todo application to add, edit, delete, and mark Todo items as completed.</p>

    <h2>Further Help</h2>
    <p>If you encounter any issues or have questions, feel free to contact [Your Contact Information].</p>
</body>
</html>
