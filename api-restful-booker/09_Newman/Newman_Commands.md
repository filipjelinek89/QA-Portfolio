# Newman Commands

This document contains the most commonly used Newman CLI commands for this project.

---

# Install Dependencies

```powershell
npm install
```

Installs all project dependencies defined in `package.json`.

---

# Execute Collection

```powershell
npx newman run RestfulBooker.postman_collection.json
```

Runs the complete Postman collection using Newman.

---

# Execute with Environment

```powershell
npx newman run RestfulBooker.postman_collection.json -e RestfulBooker.postman_environment.json
```

Runs the collection using the specified environment.

---

# Generate HTML Report

```powershell
npx newman run RestfulBooker.postman_collection.json ^
-r cli,htmlextra ^
--reporter-htmlextra-export HTML_Report/Newman_Report.html
```

Generates a detailed HTML execution report.

---

# Generate JSON Report

```powershell
npx newman run RestfulBooker.postman_collection.json ^
-r json ^
--reporter-json-export JSON_Report/Newman_Report.json
```

Exports the execution results in JSON format.

---

# Generate JUnit Report

```powershell
npx newman run RestfulBooker.postman_collection.json ^
-r junit ^
--reporter-junit-export JUnit_Report/Newman_Report.xml
```

Generates a JUnit XML report suitable for CI/CD systems.

---

# Generate Multiple Reports

```powershell
npx newman run RestfulBooker.postman_collection.json ^
-r cli,htmlextra,json,junit ^
--reporter-htmlextra-export HTML_Report/Newman_Report.html ^
--reporter-json-export JSON_Report/Newman_Report.json ^
--reporter-junit-export JUnit_Report/Newman_Report.xml
```

Executes the collection once and generates HTML, JSON, and JUnit reports simultaneously.

---

# Run After Fresh Clone

```powershell
cd 05_Postman
npm install
npx newman run RestfulBooker.postman_collection.json
```

Used when setting up the project on a new machine.