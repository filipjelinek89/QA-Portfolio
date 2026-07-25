# Installation

Navigate to the Postman project folder:

```powershell
cd 05_Postman
```

Install project dependencies:

```powershell
npm install
```

Run the Newman collection:

```powershell
npx newman run RestfulBooker.postman_collection.json
```

Generate an HTML report:

```powershell
npx newman run RestfulBooker.postman_collection.json -r cli,htmlextra --reporter-htmlextra-export HTML_Report/Newman_Report.html
```
### Dependency Audit

The project dependencies were checked using:

```bash
npm audit


