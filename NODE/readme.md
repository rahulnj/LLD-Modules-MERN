# Notes

## How can you make Node.js application scalable?

<https://initjs.org/how-to-scale-a-node-api-for-millions-of-requests-per-second-the-ultimate-guide-e6f6694ad92b>

- you can use clustering to create multiple instances of the application running on different cores.
- Implement a load balancer to distribute incoming requests among these instances.
- Optimize the code by removing any blocking operations and implementing efficient algorithms.
- Use Cache to store frequently accessed data and reduce database queries.
- Optimise database queries by creating appropriate indexes and regularly monitoring query performance.
