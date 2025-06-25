# Panel Gift - Social Media Marketing Dashboard

A modern, responsive Vue 3 dashboard application for managing and searching social media marketing services. Built with Vue 3, Vite, and Tailwind CSS.

![Panel Gift Dashboard](https://img.shields.io/badge/Vue-3.5.13-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.10-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🚀 Features

### Core Functionality
- **Service Search & Discovery**: Browse through thousands of social media marketing services
- **Advanced Filtering**: Filter by providers, price ranges, quantities, and service options
- **Real-time Data Table**: Sortable and searchable table with pagination
- **Trending Services**: Quick access to popular services like Instagram followers, Facebook likes, YouTube subscribers
- **Service Management**: Activate/deactivate services, mark favorites, and track service status

### User Interface
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Collapsible Sidebar**: Space-efficient navigation with smooth animations
- **Modern UI/UX**: Beautiful gradient designs and smooth transitions
- **Dark/Light Theme Support**: Built with accessibility in mind

### Premium Features
- **Premium Dashboard**: Enhanced features for premium users
- **Advanced Analytics**: Detailed reports and tracking capabilities
- **Affiliate System**: Built-in affiliate marketing tools
- **Cancellation Tracker**: Monitor service cancellations and refunds

## 🛠️ Tech Stack

- **Frontend Framework**: Vue 3 with Composition API
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.10
- **Icons**: Heroicons Vue
- **UI Components**: Custom components with modern design
- **State Management**: Vue 3 Composition API with custom composables

## 📦 Installation

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd frontend1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the URL shown in your terminal)

## 🏗️ Project Structure

```
frontend1/
├── src/
│   ├── components/          # Reusable Vue components
│   │   ├── DataTable.vue    # Main data table component
│   │   ├── FilterSection.vue # Advanced filtering interface
│   │   ├── Header.vue       # Application header
│   │   ├── Sidebar.vue      # Navigation sidebar
│   │   └── ...
│   ├── pages/               # Page components
│   │   └── TrendingSearches.vue
│   ├── composables/         # Vue 3 composables
│   │   ├── useFilters.js    # Filter management logic
│   │   └── useTableData.js  # Table data and pagination
│   ├── data/                # Static data and configurations
│   ├── assets/              # Images, SVGs, and static assets
│   └── utils/               # Utility functions
├── public/                  # Public assets
└── package.json            # Dependencies and scripts
```

## 🎯 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🎨 Key Components

### DataTable.vue
Advanced data table with sorting, filtering, and pagination capabilities.

### FilterSection.vue
Comprehensive filtering interface with multiple filter types and real-time updates.

### Sidebar.vue
Collapsible navigation sidebar with smooth animations and premium features display.

### TrendingCards.vue
Showcase of popular social media services with visual cards.

## �� Configuration

### Environment Variables
Create a `.env` file in the root directory for environment-specific configurations:

```env
VITE_API_BASE_URL=your_api_base_url
VITE_APP_TITLE=Panel Gift
```

### Tailwind CSS Configuration
The project uses Tailwind CSS 4.1.10 with custom configurations in `tailwind.config.js`.

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Static Hosting
The built files in the `dist/` directory can be deployed to any static hosting service like:
- Vercel
- Netlify
- GitHub Pages
- AWS S3

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🔮 Roadmap

- [ ] Real-time notifications
- [ ] Advanced analytics dashboard
- [ ] Mobile app version
- [ ] API integration for live data
- [ ] Multi-language support
- [ ] Advanced reporting features

---

**Panel Gift** - Empowering social media marketing with modern technology.
