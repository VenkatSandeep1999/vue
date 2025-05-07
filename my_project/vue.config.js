module.exports = {
  devServer: {
    // For local development
    disableHostCheck: true,
    // For production on Render
    allowedHosts: [
      '.onrender.com', // Allows all Render subdomains
      'your-service-name.onrender.com' // Your specific Render URL
    ]
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/'
}
