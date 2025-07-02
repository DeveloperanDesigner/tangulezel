<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Ad Campaign Showcase</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f8f9fa;
      margin: 0;
      padding: 20px;
      color: #333;
    }
    h1 {
      text-align: center;
      color: #2c3e50;
      margin-bottom: 40px;
    }
    .campaigns {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 30px;
      max-width: 1000px;
      margin: 0 auto;
    }
    .campaign {
      background: white;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgb(0 0 0 / 0.1);
      max-width: 300px;
      flex: 1 1 280px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      transition: transform 0.3s ease;
    }
    .campaign:hover {
      transform: translateY(-8px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    }
    .campaign img {
      width: 100%;
      height: 180px;
      object-fit: cover;
    }
    .campaign-content {
      padding: 15px 20px;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }
    .campaign-title {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 10px;
      color: #1d3557;
    }
    .campaign-desc {
      flex-grow: 1;
      font-size: 0.95rem;
      line-height: 1.4;
      color: #555;
    }
    .campaign-link {
      margin-top: 15px;
      align-self: flex-start;
      text-decoration: none;
      color: #e63946;
      font-weight: 600;
      font-size: 0.9rem;
    }
    .campaign-link:hover {
      text-decoration: underline;
    }
    @media (max-width: 640px) {
      .campaigns {
        flex-direction: column;
        align-items: center;
      }
      .campaign {
        max-width: 90%;
      }
    }
  </style>
</head>
<body>

  <h1>Our Latest Ad Campaigns</h1>

  <div class="campaigns">

    <div class="campaign">
      <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="Summer Sale Campaign" />
      <div class="campaign-content">
        <div class="campaign-title">Summer Sale Blast</div>
        <div class="campaign-desc">
          Boost your sales this summer with our exclusive discounts and engaging email marketing campaigns designed to capture customer attention.
        </div>
        <a href="#" class="campaign-link">Learn More</a>
      </div>
    </div>

    <div class="campaign">
      <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80" alt="Holiday Promotion" />
      <div class="campaign-content">
        <div class="campaign-title">Holiday Season Promotion</div>
        <div class="campaign-desc">
          Engage your audience during the holiday season with personalized SMS campaigns and loyalty rewards that increase customer retention.
        </div>
        <a href="#" class="campaign-link">Discover How</a>
      </div>
    </div>

    <div class="campaign">
      <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" alt="New Product Launch" />
      <div class="campaign-content">
        <div class="campaign-title">New Product Launch</div>
        <div class="campaign-desc">
          Launch your new products effectively using multi-channel strategies that combine email, SMS, and social media to maximize reach.
        </div>
        <a href="#" class="campaign-link">Get Started</a>
      </div>
    </div>

  </div>

</body>
</html>
