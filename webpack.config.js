const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const fs = require('fs');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackSimpleIncludePlugin = require("html-webpack-simple-include-plugin");
module.exports = {
  entry: {
    main: "./src/index.js",
  },
  mode: "development",
  devServer: {
    watchFiles: ["src/**/*"],
    hot: true,
    port:8080,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/assets", to: "assets" }
      ],
    }),
   
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "index2.html", 
      template: "src/index2.html",
    }),
    new HtmlWebpackPlugin({
      filename: "index3.html", 
      template: "src/index3.html",
    }),
    new HtmlWebpackPlugin({
      filename: "index4.html", 
      template: "src/index4.html",
    }),
    new HtmlWebpackPlugin({
      filename: "about-us.html", 
      template: "src/about-us.html",
    }),
    new HtmlWebpackPlugin({
      filename: "find-workers.html", 
      template: "src/find-workers.html",
    }),
    new HtmlWebpackPlugin({
      filename: "worker-profile.html", 
      template: "src/worker-profile.html",
    }),
    new HtmlWebpackPlugin({
      filename: "service-details.html", 
      template: "src/service-details.html",
    }),
    new HtmlWebpackPlugin({
      filename: "worker-portfolio.html", 
      template: "src/worker-portfolio.html",
    }),
    new HtmlWebpackPlugin({
      filename: "worker-portfolio-details.html", 
      template: "src/worker-portfolio-details.html",
    }),
    new HtmlWebpackPlugin({
      filename: "blog.html", 
      template: "src/blog.html",
    }),
    new HtmlWebpackPlugin({
      filename: "blog-details.html", 
      template: "src/blog-details.html",
    }),
    new HtmlWebpackPlugin({
      filename: "browse-tasks.html", 
      template: "src/browse-tasks.html",
    }),
    new HtmlWebpackPlugin({
      filename: "become-tasker.html", 
      template: "src/become-tasker.html",
    }),
    new HtmlWebpackPlugin({
      filename: "faq.html", 
      template: "src/faq.html",
    }),
    new HtmlWebpackPlugin({
      filename: "contact.html", 
      template: "src/contact.html",
    }),
    new HtmlWebpackPlugin({
      filename: "sign-up-step-1.html", 
      template: "src/sign-up-step-1.html",
    }),
    new HtmlWebpackPlugin({
      filename: "sign-up-step-2.html", 
      template: "src/sign-up-step-2.html",
    }),
    new HtmlWebpackPlugin({
      filename: "sign-up-step-3.html", 
      template: "src/sign-up-step-3.html",
    }),
    new HtmlWebpackPlugin({
      filename: "sign-in.html", 
      template: "src/sign-in.html",
    }),
    new HtmlWebpackPlugin({
      filename: "not-found.html", 
      template: "src/not-found.html",
    }),
    new HtmlWebpackPlugin({
      filename: "privacy-policy.html", 
      template: "src/privacy-policy.html",
    }),
    new HtmlWebpackPlugin({
      filename: "terms-conditions.html", 
      template: "src/terms-conditions.html",
    }),
    new HtmlWebpackPlugin({
      filename: "working-processed-step-01.html", 
      template: "src/working-processed-step-01.html",
    }),
    new HtmlWebpackPlugin({
      filename: "working-processed-step-02.html", 
      template: "src/working-processed-step-02.html",
    }),
    new HtmlWebpackPlugin({
      filename: "working-processed-step-03.html", 
      template: "src/working-processed-step-03.html",
    }),
    new HtmlWebpackPlugin({
      filename: "working-processed-step-04.html", 
      template: "src/working-processed-step-04.html",
    }),
    new HtmlWebpackPlugin({
      filename: "working-processed-step-05.html", 
      template: "src/working-processed-step-05.html",
    }),
    new HtmlWebpackPlugin({
      filename: "working-processed-step-06.html", 
      template: "src/working-processed-step-06.html",
    }),

    new HtmlWebpackPlugin({
      filename: "worker-profile-jobs.html", 
      template: "src/worker-profile-jobs.html",
    }),
    new HtmlWebpackPlugin({
      filename: "worker-profile-recommendations.html", 
      template: "src/worker-profile-recommendations.html",
    }),
   
    new HtmlWebpackPlugin({
      filename: "worker-profile-works.html", 
      template: "src/worker-profile-works.html",
    }),
    new HtmlWebpackPlugin({
      filename: "services.html", 
      template: "src/services.html",
    }),

    new HtmlWebpackPlugin({
      filename: "chat.html", 
      template: "src/chat.html",
    }),
    new HtmlWebpackPlugin({
      filename: "hire-me.html", 
      template: "src/hire-me.html",
    }),
    // Dashboard
    new HtmlWebpackPlugin({
      filename: "dashboard/index.html", 
      template: "src/dashboard/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "dashboard/services.html", 
      template: "src/dashboard/services.html",
    }),
    new HtmlWebpackPlugin({
      filename: "dashboard/edit-services.html", 
      template: "src/dashboard/edit-services.html",
    }),
    new HtmlWebpackPlugin({
      filename: "dashboard/profile.html", 
      template: "src/dashboard/profile.html",
    }),
    new HtmlWebpackPlugin({
      filename: "dashboard/edit-profile.html", 
      template: "src/dashboard/edit-profile.html",
    }),
    new HtmlWebpackPlugin({
      filename: "dashboard/payment-details.html", 
      template: "src/dashboard/payment-details.html",
    }),
    new HtmlWebpackPlugin({
      filename: "dashboard/reviews.html", 
      template: "src/dashboard/reviews.html",
    }),
    new HtmlWebpackPlugin({
      filename: "dashboard/settings.html", 
      template: "src/dashboard/settings.html",
    }),
    new HtmlWebpackPlugin({
      filename: "dashboard/wishlist.html", 
      template: "src/dashboard/wishlist.html",
    }),
    new HtmlWebpackSimpleIncludePlugin([
      {
        tag: '<include-header />',
        content: fs.readFileSync(path.resolve(__dirname, "src/partials/header.html")),
      },
      {
        tag: '<include-fixed-price-service-section />',
        content: fs.readFileSync(path.resolve(__dirname, "src/partials/fixed-price-service-section.html")),
      },
      {
        tag: '<include-looking-for-service-section />',
        content: fs.readFileSync(path.resolve(__dirname, "src/partials/looking-for-service-section.html")),
      },
      {
        tag: '<include-secure-guard-section />',
        content: fs.readFileSync(path.resolve(__dirname, "src/partials/secure-guard-section.html")),
      },
      {
        tag: '<include-news-letter-section />',
        content: fs.readFileSync(path.resolve(__dirname, "src/partials/news-letter-section.html")),
      },
      {
        tag: '<include-get-workers-gigs />',
        content: fs.readFileSync(path.resolve(__dirname, "src/partials/get-workers-gigs.html")),
      },
      {
        tag: '<include-recent-posts-section />',
        content: fs.readFileSync(path.resolve(__dirname, "src/partials/recent-posts-section.html")),
      },
      {
        tag: '<include-get-help-today-section />',
        content: fs.readFileSync(path.resolve(__dirname, "src/partials/get-help-today-section.html")),
      },
      {
        tag: '<include-footer-one />',
        content: fs.readFileSync(path.resolve(__dirname, "src/partials/footer-one.html")),
      },
      {
        tag: '<include-top-experts-section />',
        content: fs.readFileSync(path.resolve(__dirname, "src/partials/top-experts-section.html")),
      },
      {
        tag: '<include-faq-section />',
        content: fs.readFileSync(path.resolve(__dirname, "src/partials/faq-section.html")),
      },
      {
        tag: '<include-search-box />',
        content: fs.readFileSync(path.resolve(__dirname, "src/partials/search-box.html")),
      },
      {
        tag: '<include-testimonial-three />',
        content: fs.readFileSync(path.resolve(__dirname, "src/partials/testimonial-three.html")),
      },
      {
        tag: '<include-how-it-works />',
        content: fs.readFileSync(path.resolve(__dirname, "src/partials/how-it-works-section.html")),
      },

      {
        tag: '<include-dashboard-header />',
        content: fs.readFileSync(path.resolve(__dirname, "src/partials/dashboard-header.html")),
      },
      {
        tag: '<include-scroll-top-button />',
        content: fs.readFileSync(path.resolve(__dirname, "src/partials/scroll-top-button.html")),

      },
    ])
  ],
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
