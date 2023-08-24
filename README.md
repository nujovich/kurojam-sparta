# DUCKUROPHY 🦆🏆

![DuckMeme Logo](https://kurojam-sparta-client.onrender.com/)

Duckurophy is a web application that lets you create hilarious images featuring our feathered friends, ducks! Express your creativity by generating memes with OpenIA and adorable duck images. This project brings together a combination of modern technologies for a seamless user experience.

## Features

- Generate your image prompt using OpenAI's powerful AI engine.
- Save your image url 
- Instantly preview the trending duck memes
- Rate the images that you like

## Technologies Used

### Front-End

- **Package Manager**: [pnpm](https://pnpm.io/)
- **JavaScript Framework**: [React](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **UI Library**: [Shadcdn UI](https://shadcdn.com/ui)
- **Authentication**: [Clerk](https://clerk.dev/)

### Back-End

- **Runtime Environment**: [Node.js](https://nodejs.org/)
- **Web Framework**: [Express](https://expressjs.com/)
- **Authentication**: [Clerk](https://clerk.dev/)
- **Data Persistence**: [MongoDB](https://www.mongodb.com/)
- **Build System**: [Turbo Repo](https://turbo.dev/repo)
- **AI Integration**: [OpenAI](https://www.openai.com/)
- **Image Hosting**: [AWS](https://aws.com/)

## Getting Started

Follow these instructions to get a copy of the DUCKUROPHY up and running on your local machine for development and testing purposes.

1. **Clone the repository**:

   ```bash
   git clone https://github.com/nujovich/kurojam-sparta.git
   cd kurojam-sparta
   ```

2. **Install Dependencies**:

   Make sure you have [pnpm](https://pnpm.io/) installed globally. Then, run the following command:

   ```bash
   pnpm install
   ```

3. **Environment Variables**:

   Front-End:

   Create a `.env` file in the server root directory and provide the necessary environment variables:   

   ```
   VITE_CLERK_PUBLISHABLE_KEY=YOUR_API_KEY
   VITE_API_URL=YOUR_API_URL
   ```

   Back-End:

   Create a `.env` file in the server root directory and provide the necessary environment variables:

   ```plaintext
   DB_URL=DB_URL
   PORT=PORT
   OPENAI_API_KEY=OPENAI_API_KEY
   CLERK_API_KEY=CLEARK_API_KEY
   S3_ACCESS_KEY=S3_ACCESS_KEY
   S3_SECRET_KEY=S3_SECRET_KEY
   S3_BUCKET_NAME=S3_BUCKET_NAME
   ```

4. **Run Development Servers**:

   - Front-End:

     ```bash
     pnpm dev
     ```

   - Back-End:

     ```bash
     node server.js
     ```

5. **Access the Application**:

   Open your browser and navigate to `http://localhost:3000` to access the DuckMeme Generator.

## Contributing

We welcome contributions to enhance the DuckMeme Generator! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your improvements.
4. Test thoroughly.
5. Commit your changes and push to your fork.
6. Create a pull request detailing your changes.

## License

This project is licensed under the [MIT License](LICENSE).

---

Let your creativity take flight with DuckMeme Generator! Create rib-tickling duck memes and share them with your friends. Quack up your social media with laughter today! 🦆🎉