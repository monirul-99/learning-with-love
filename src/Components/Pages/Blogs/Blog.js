import React from "react";

const Blog = () => {
  return (
    <div className="lg:p-28">
      <div class="lg:w-1/2 mx-auto divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white font-Poppins">
        <details class="group p-6" open>
          <summary class="flex cursor-pointer items-center justify-between">
            <h2 class="text-lg font-medium text-gray-900">what is cors?</h2>

            <span class="relative ml-1.5 h-5 w-5 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p class="mt-4 leading-relaxed text-gray-700">
            CORS stands for Cross-Origin Resource Sharing . It allows us to
            relax the security applied to an API. This is done by bypassing the
            Access-Control-Allow-Origin headers, which specify which origins can
            access the API.
          </p>
        </details>
        <details class="group p-6">
          <summary class="flex cursor-pointer items-center justify-between">
            <h2 class="text-lg font-medium text-gray-900">
              Why are you using firebase? What other options do you have to
              implement authentication?
            </h2>

            <span class="relative ml-1.5 h-5 w-5 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p class="mt-4 leading-relaxed text-gray-700 space-y-5">
            Firebase Authentication provides backend services, easy-to-use SDKs,
            and ready-made UI libraries to authenticate users to your app. It
            supports authentication using passwords, phone numbers, popular
            federated identity providers like Google, Facebook and Twitter, and
            more.?
          </p>

          <p>
            Auth0, MongoDB, Passport, Okta, and Firebase are the most popular
            alternatives and competitors to Firebase Authentication.
          </p>
        </details>
        <details class="group p-6">
          <summary class="flex cursor-pointer items-center justify-between">
            <h2 class="text-lg font-medium text-gray-900">
              How does the private route work?
            </h2>

            <span class="relative ml-1.5 h-5 w-5 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p class="mt-4 leading-relaxed text-gray-700 space-y-2">
            The private route component is similar to the public route, the only
            change is that redirect URL and authenticate condition. If the user
            is not authenticated he will be redirected to the login page and the
            user can only access the authenticated routes If he is authenticated
            (Logged in).
          </p>
        </details>
        <details class="group p-6">
          <summary class="flex cursor-pointer items-center justify-between">
            <h2 class="text-lg font-medium text-gray-900">
              What is Node? How does Node work?
            </h2>

            <span class="relative ml-1.5 h-5 w-5 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <div className="px-4 pb-4 space-y-2">
            <p>
              Load balancing, distributed monitoring, caching, message queuing,
              the cloud, and more. Interactive in browser learning means no set
              up required. Free to Join. Start Today. Hands-On Learning. No
              Set-Up Required. Slick Coding Environments.
            </p>
            <p>
              Appwrite is a self-hosted Backend-as-a-Service platform that
              offers APIs to build any app. Authenticate user account, create
              databases, manage project files in Node.js. Get started. For Web,
              Mobile & Flutter. Powerful & Flexible. Verbose Documentation.
              Cross-Platform.
            </p>
          </div>
        </details>
      </div>
    </div>
  );
};

export default Blog;
