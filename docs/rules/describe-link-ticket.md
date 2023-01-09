# Describe statements should include a ticket ID to know where the request came from


```
// Good
describe('[Ticket ID: 123456] login form', () => {
  // test cases go here
});

// Bad
describe('login form', () => {
  // test cases go here
});
```