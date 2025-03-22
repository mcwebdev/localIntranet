```md
# 🏠 Local Intranet Web Server

A lightweight Node.js server that hosts a static website accessible only to devices on your local Wi-Fi network.

---

## 🚀 Features

- Serves static HTML/CSS/JS files from a `public/` folder
- Runs only on your local network (no external exposure)
- Perfect for internal tools, home dashboards, offline docs, or secret digital hideouts 😎

---

## 📁 Project Structure

    localIntranet/
    ├── public/
    │   └── index.html        # Your static site files go here
    ├── server.js             # Express server setup
    └── package.json          # Project metadata and dependencies

---

## 🛠️ Setup & Usage

### 1. Clone or Download the Repo

    git clone https://github.com/yourname/local-intranet-server.git
    cd local-intranet-server

### 2. Install Dependencies

    npm install

### 3. Start the Server

    node server.js

### 4. Access the Site

#### On the host machine:

    http://localhost:8080

#### From other devices on the same network:

1. Find your local IP
   - On Windows: `ipconfig`
   - On Mac/Linux: `ifconfig`
2. Look for an address like `192.168.x.x`
3. Visit:

   http://192.168.x.x:8080

---

## 🔐 Security Notes

- This server is **only accessible on your local network**
- Do **not** port forward your router unless you want to expose it to the internet
- Use a firewall or access control if needed

---

## 🧠 Built With

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)

---

## ✨ Future Ideas

- Add basic auth/password wall
- Add dashboard with widgets (weather, notes, bookmarks)
- Build a LAN-only message board
- Style it like a retro 90s hacker terminal or a vaporwave sanctuary 😄

---

## 📜 License

MIT – Use freely, break boldly.
```
