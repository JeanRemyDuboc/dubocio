---
title: 'What are marketing tags? An overview'
pubDate: 2022-07-12
author: 'Jean-Rémy Duboc'
tags: ["explanations"]
lang: 'en'
en: 'marketing-tag-overview'
fr: 'les-tags-marketing'
---
Data is a precious resource, which tells us so much about our customers! It allows us to understand their needs, create tailor-made offers for them, create promotions and encourage them to click and buy, etc.

But where does all this data come from? It all starts with tracking tags, small bits of code placed everywhere on your ecommerce site, on your blog or in your mobile application.

In this article, I explain what a marketing tag is, how it works, and how to use them for best results.
We won't go into too much technical details, which are covered in other articles.

=> Link: How to install and manage marketing tags

## Marketing Tag, Tracking Pixels...what are we talking about exactly ?

When you build a site or an application, it's really important to understand your users, to constantly improve your services. To do this, we must answer a few key tactical questions: which pages are the most visited? Which products are viewed the most? What's the conversion rate on each of the homepage CTAs? What about the landing page for our latest Facebook campaign? etc.

**The technical solution to this need is the marketing tag**. Marketing tags (or pixels) communicate with an external system, sending it information about each user's action (with their consent). By aggregating the information collected, you can get a clearer idea of trends, opportunities and things to improve. This is the magic of digital marketing.

## Get to know the three type of tags: to analyse, to promote your products, measure your conversions, and much more

I classify marketing tags in three main categories:

### 1. Get to know your users with analytics tags

These marketing pixels allow us to understand who comes to our sites and applications, and what they do there. [Google Analytics](https://analytics.google.com/analytics/web/) is one of the most popular, but there are many other similar tools:

- [Adobe Analytics](https://www.adobe.com/uk/analytics/web-analytics.html)
- [Oribi](https://oribi.io/)
- [Matomo](https://matomo.org/)
- etc.

To get started, you have to install Google Analytics on your site.
These two articles tell you how to:
=> Link - How to install Google Analytics on your site (without GTM)
=> Link - How to install Google Analytics on your site (with GTM)

Now let's imagine that a customer navigates on our home page, and adds our flagship product to her shopping cart.
If we have installed the Google Analytics tag, as soon as the page is loaded, **the tag is triggered**, and sends a request on GA to saying: "ding ding! your site has a new visitor on the home page !", "ding-ding! Someone added a product to the cart", "ding! ding! They made a purchase", etc. And there you go! Your first piece of data is collected.

Google Analytics tracks all clicks by default (after users give their consent), as well as many other events. Read the documentation below for technical details:

[Events on Google Analytics 4 (GA4)](https://support.google.com/tagmanager/answer/9442095)

You can configure a custom event that will give you more details: product name, price, quantity, etc.
Let's assume that adding the product to the cart is done with a click. To measure the conversion rate on your e-commerce site, you can configure GA4 so that a specific click is traced as a conversion.

This article explains how to configure events and conversions on GA4:
=> Link - how to configure events on GA4

You can then create a report on Google Analytics, with an overview of all "product added to cart" type events on your site.

And voilà! Data!

### 2. Create custom promotionnal material for your prospective clients with remarketing tags

Now imagine that our user does not buy anything, and moves on to another site. This new site contains advertising banners. As luck would have it, these banners promote our products! Magic? FBI spies? Nope! It all works thanks to a **remarketing pixel**.

When visiting our site (site A), the user triggers a remarketing pixel. This pixel sends a request to an advertising network, and registers the presence of our user on the site. Most often this information is saved on the client browser as a cookie, but new techniques are becoming more and more common to identify the user, in particular to identify users across several devices (PC, mobile, tablets, etc.)

This article explains how GA4 identifies users without cookies:
=> Link - Cross-device and cross-platform reporting in GA

Then, when the user browses on the new site (Site B, the advertiser's site), another tag fires, which sends information about our user to the ad network. The network responds, in essence: "I recognize this user in my database, here are some products that might interest her". Product selection is determined by the user's visit history, and by advertisers who have paid to target similar users with their products and services.

### 3. Want to know if your marketing efforts are working? Meet the conversion tag

Finally, our user makes a decision; she clicks on our enticing banner, and buys a product on our site.
A new pixel fires; it's a **conversion tag**. It sends a message to the advertising network, to let them know that our user made a purchase.

This has two consequences for us:

1. On the advertising network site and on Google Analytics, we can view the conversion rate of our campaign.
2. The advertising network uses this data to calculate the invoice that will be requested from us.

As an example, you can read the Facebook conversion pixel details here: [The Facebook pixel: optimise and build audiences for your advertising campaigns.](https://www.facebook.com/business/learn/facebook-ads-pixel)

### But wait, there's more...

There are still other tags that allow you to add features to your site, such as A/B tests (with [Google Optimize](https://optimize.google.com/optimize/home/) for example), customer chats (example: [LivePerson](https://www.liveperson.com/)), etc.
I won't go into them in detail in this article, because they are not really marketing tags as such, but really functional tags.

## Going further: understanding the technologies used for marketing tags

Marketing tags are usually implemented in JavaScript, and leverage the way web browsers work. Marketing tag implementation is a vast subject, which can become very complex, very quickly.
Read this article to start learning about how tags are created and managed:
=> Link: How to install and manage marketing tags
