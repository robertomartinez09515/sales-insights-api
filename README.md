# Sales Insights API 🚀  

A **Next.js API** that processes sales data and generates insights using the **OpenAI API**.  

---

## 📌 Features  

✔️ RESTful API with **Next.js App Router**  
✔️ Computes **sales analytics** (total sales, best category, etc.)  
✔️ Uses **OpenAI API** for AI-generated sales summaries  
✔️ **Dockerized** for easy deployment  
✔️ Secure & environment-friendly using **.env.local**  

---

## 📌 Setup & Installation  

### 🔹 Prerequisites  
Ensure you have the following installed:  

- **Node.js 18+**  
- **npm (Node Package Manager)**  
- **Docker**  
- **GitHub SSH access**  
- **OpenAI API Key**  

### 🔹 Clone the Repository  
```bash
git clone git@github.com:your-username/sales-insights-api.git
cd sales-insights-api
```  

### 🔹 Install Dependencies  
```bash
npm install
```  

### 🔹 Set Up Environment Variables  
Create a `.env.local` file:  
```bash
nano .env.local
```  
Add your OpenAI API key:  
```ini
OPENAI_API_KEY=your_openai_api_key_here
```  
Save the file (`CTRL+X`, then `Y`, then `Enter`).  

---

## 📌 Run the API Locally  
Start the **Next.js development server**:  
```bash
npm run dev
```  
Your API is now running at:  
👉 **http://localhost:3000/api/sales/insights**  

---

## 🧪 Test the API  
Using **cURL**:  
```bash
curl -X POST http://localhost:3000/api/sales/insights \
  -H "Content-Type: application/json" \
  -d '{
    "sales": [
      {
        "name": "Alice Johnson",
        "email": "alice.johnson1@example.com",
        "product": "Widget A",
        "category": "Widgets",
        "amount": 120.50,
        "date": "2023-03-01",
        "state": "California"
      },
      {
        "name": "Bob Smith",
        "email": "bob.smith2@example.com",
        "product": "Widget A",
        "category": "Widgets",
        "amount": 85.00,
        "date": "2023-03-02",
        "state": "California"
      }
    ]
  }'
```  

### Expected JSON Response:  
```json
{
    "insights": {
        "totalSales": 12757.25,
        "averageTransaction": 127.5725,
        "bestCategory": "Widgets",
        "salesByCategory": {
            "Widgets": 9202.75,
            "Gadgets": 1952.25,
            "Tools": 1602.25
        }
    },
    "aiSummary": "Total sales for the period were $12,757.25, with an average transaction value of $127.5725. The best-selling category was Widgets, which accounted for $9,202.75 in sales. This was followed by Gadgets with $1,952.25 and Tools with $1,602.25 in sales."
}
```  

---

## 📌 Running the API in Docker  

### 🔹 Build the Docker Image  
```bash
docker build -t sales-insights-api .
```  

### 🔹 Run the Container  
```bash
docker run -p 3000:3000 --env-file .env.local sales-insights-api
```  

### 🔹 Test the API Inside Docker  
```bash
curl -X POST http://localhost:3000/api/sales/insights \
  -H "Content-Type: application/json" \
  -d '{
    "sales": [
      {
        "name": "Alice Johnson",
        "email": "alice.johnson1@example.com",
        "product": "Widget A",
        "category": "Widgets",
        "amount": 120.50,
        "date": "2023-03-01",
        "state": "California"
      },
      {
        "name": "Bob Smith",
        "email": "bob.smith2@example.com",
        "product": "Widget A",
        "category": "Widgets",
        "amount": 85.00,
        "date": "2023-03-02",
        "state": "California"
      }
    ]
  }'
```  

### 🔹 Stop & Remove Containers  
```bash
docker stop $(docker ps -q)
docker system prune -f
```  

---

## 📌 Folder Structure  
```bash
/sales-insights-api
│── /app/api/sales/insights/route.ts  (API Route)
│── /utils/dataProcessor.ts  (Processes Sales Data)
│── /utils/openAIHelper.ts  (Integrates OpenAI API)
│── /public  (Static Assets)
│── /node_modules  (Dependencies)
│── .env.local  (Environment Variables)
│── Dockerfile  (Docker Configuration)
│── .dockerignore  (Ignore Unwanted Files)
│── package.json  (Project Dependencies)
│── README.md  (You're Here!)
```  

---

## 📌 Contributing  
🙌 Contributions are welcome! Please follow these steps:  

1. Fork the repository  
2. Create a new branch (`git checkout -b feature-branch`)  
3. Commit your changes (`git commit -m "Added new feature"`)  
4. Push to the branch (`git push origin feature-branch`)  
5. Open a pull request  

---

## 📌 License  
🔓 **MIT License** – Feel free to use and modify! 🚀  
