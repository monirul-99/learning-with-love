import React from "react";

const Blog = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100 lg:p-56 p-16">
        <div className="container flex flex-col justify-center  mx-auto md:p-8">
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            <details>
              <summary className="py-2 lg:text-2xl capitalize outline-none cursor-pointer focus:underline">
                what is cors?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  CORS stands for Cross-Origin Resource Sharing . It allows us
                  to relax the security applied to an API. This is done by
                  bypassing the Access-Control-Allow-Origin headers, which
                  specify which origins can access the API.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 lg:text-2xl capitalize outline-none cursor-pointer focus:underline">
                Why are you using firebase? What other options do you have to
                implement authentication?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Firebase Authentication provides backend services, easy-to-use
                  SDKs, and ready-made UI libraries to authenticate users to
                  your app. It supports authentication using passwords, phone
                  numbers, popular federated identity providers like Google,
                  Facebook and Twitter, and more.?
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 lg:text-2xl capitalize outline-none cursor-pointer focus:underline">
                How does the private route work?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  The private route component is similar to the public route,
                  the only change is that redirect URL and authenticate
                  condition. If the user is not authenticated he will be
                  redirected to the login page and the user can only access the
                  authenticated routes If he is authenticated (Logged in).
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 lg:text-2xl capitalize outline-none cursor-pointer focus:underline">
                What is Node? How does Node work?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Load balancing, distributed monitoring, caching, message
                  queuing, the cloud, and more. Interactive in browser learning
                  means no set up required. Free to Join. Start Today. Hands-On
                  Learning. No Set-Up Required. Slick Coding Environments.
                </p>
                <p>
                  Appwrite is a self-hosted Backend-as-a-Service platform that
                  offers APIs to build any app. Authenticate user account,
                  create databases, manage project files in Node.js. Get
                  started. For Web, Mobile & Flutter. Powerful & Flexible.
                  Verbose Documentation. Cross-Platform.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
