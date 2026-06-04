const clientData = {
  admin: {
    companyName: "BayRecruit Admin Dashboard",
    clients: 10000,
    resources: 48200,
    tasks: 350,
    cost: "$92.5K",
    onlineUsers: 6000,
    failedLogins: 80,
    highCostAlerts: 45,
    inactiveClients: 320
  },

  client1: {
    companyName: "ABC Manufacturing Ltd",
    clients: 1,
    resources: 10,
    tasks: 2,
    cost: "$300"
  },

  client2: {
    companyName: "Skyline Logistics Ltd",
    clients: 1,
    resources: 15,
    tasks: 1,
    cost: "$500"
  },

  client3: {
    companyName: "Nova Retail Group",
    clients: 1,
    resources: 8,
    tasks: 0,
    cost: "$150"
  }
};

function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const loginTime = new Date().toLocaleString();

  if (email === "admin@bayrecruit.com" && password === "admin123") {
    saveLogin("admin", email, "BayRecruit Admin", loginTime);
  } else if (email === "client1@company.com" && password === "client123") {
    saveLogin("client1", email, "ABC Manufacturing Ltd", loginTime);
  } else if (email === "client2@company.com" && password === "client123") {
    saveLogin("client2", email, "Skyline Logistics Ltd", loginTime);
  } else if (email === "client3@company.com" && password === "client123") {
    saveLogin("client3", email, "Nova Retail Group", loginTime);
  } else {
    document.getElementById("loginMessage").innerText = "Invalid Email or Password";
  }
}

function saveLogin(user, email, company, loginTime) {
  localStorage.setItem("user", user);
  localStorage.setItem("lastLoginEmail", email);
  localStorage.setItem("lastLoginCompany", company);
  localStorage.setItem("lastLoginTime", loginTime);
  window.location.href = "index.html";
}

function loadDashboard() {
  const user = localStorage.getItem("user");

  if (!user) {
    window.location.href = "login.html";
    return;
  }

  const data = clientData[user];

  document.getElementById("companyName").innerText = data.companyName;
  document.getElementById("activeClients").innerText = data.clients;
  document.getElementById("cloudResources").innerText = data.resources;
  document.getElementById("openTasks").innerText = data.tasks;
  document.getElementById("monthlyCost").innerText = data.cost;

  const email = localStorage.getItem("lastLoginEmail");
  const company = localStorage.getItem("lastLoginCompany");
  const time = localStorage.getItem("lastLoginTime");

  document.getElementById("loginInfo").innerText =
    "Logged in company: " + company + " | User email: " + email + " | Login time: " + time;

  if (user === "admin") {
    document.getElementById("adminMonitoring").style.display = "block";
    document.getElementById("onlineUsers").innerText = data.onlineUsers;
    document.getElementById("failedLogins").innerText = data.failedLogins;
    document.getElementById("highCostAlerts").innerText = data.highCostAlerts;
    document.getElementById("inactiveClients").innerText = data.inactiveClients;
  } else {
    document.getElementById("adminMonitoring").style.display = "none";
  }
}

function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}

function generateInsight() {
  document.getElementById("aiText").innerText =
    "AI Recommendation: Review unused resources, failed logins, and high cloud cost alerts.";
}