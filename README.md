# 🐝 BuzzRoom

A modern, feature-rich real-time communication platform built with Next.js, offering seamless messaging, voice, and video capabilities.

## ✨ Features

### 💬 Real-Time Communication
- **Instant Messaging** - Lightning-fast real-time messaging powered by Socket.io
- **Rich Media Support** - Share images and PDFs seamlessly with UploadThing integration
- **Message Management** - Edit and delete messages in real-time across all clients
- **Infinite Scroll** - Optimized message loading in batches of 10 using TanStack Query

### 🎙️ Audio & Video
- **Multiple Channel Types** - Create Text, Audio, and Video call channels
- **1:1 Conversations** - Private messaging between members
- **Video Calls** - High-quality peer-to-peer video calls powered by LiveKit
- **Voice Channels** - Crystal-clear audio communication

### 👥 Server & Member Management
- **Server Customization** - Create and personalize your own servers
- **Role-Based Access** - Assign Guest or Moderator roles to members
- **Member Controls** - Kick users and manage permissions
- **Invite System** - Generate unique invite links with full tracking

### 🎨 User Experience
- **Modern UI** - Beautiful interface built with TailwindCSS and Shadcn/UI
- **Fully Responsive** - Seamless experience across all devices
- **Theme Support** - Toggle between Light and Dark modes
- **Robust Fallback** - Automatic polling with alerts when WebSocket is unavailable

## 🛠️ Tech Stack

### Frontend
- **[Next.js 13](https://nextjs.org/)** - React framework with App Router
- **[React](https://react.dev/)** - UI library
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn/UI](https://ui.shadcn.com/)** - Re-usable component library

### Backend & Real-Time
- **[Socket.io](https://socket.io/)** - Real-time bidirectional communication
- **[LiveKit](https://livekit.io/)** - Audio and video infrastructure
- **[Prisma](https://www.prisma.io/)** - Next-generation ORM
- **[MongoDB](https://www.mongodb.com/)** - NoSQL database

### Services
- **[Clerk](https://clerk.com/)** - Authentication and user management
- **[UploadThing](https://uploadthing.com/)** - File upload solution

### Additional Tools
- **[TanStack Query](https://tanstack.com/query)** - Data fetching and caching

## 📸 Screenshots

<div align="center">

### Server Dashboard
![Server Dashboard](/screenshots/1.png)

### Real-Time Messaging
![Messaging Interface](/screenshots/2.png)

### Channel Management
![Channel Management](/screenshots/3.png)

### Video Calls
![Video Calls](/screenshots/4.png)

### Member Management
![Member Management](/screenshots/5.png)

### Mobile Responsive
![Mobile View](/screenshots/6.png)

</div>

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- MongoDB database
- Clerk account
- UploadThing account
- LiveKit account

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/buzzroom.git
cd buzzroom
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Database
DATABASE_URL=

# UploadThing
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

# LiveKit
LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_URL=
```

4. **Initialize the database**
```bash
npx prisma generate
npx prisma db push
```

5. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
buzzroom/
├── app/                # Next.js 13 app directory
├── components/         # React components
├── lib/               # Utility functions and configurations
├── prisma/            # Database schema and migrations
├── public/            # Static assets
└── hooks/             # Custom React hooks
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Discord](https://discord.com/) for design inspiration
- All the amazing open-source libraries that made this project possible

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)

Project Link: [https://github.com/yourusername/buzzroom](https://github.com/yourusername/buzzroom)

---

<div align="center">
Made with ❤️ using Next.js and Socket.io
</div>
