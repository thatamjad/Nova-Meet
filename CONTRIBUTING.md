# Contributing to Nova Meet

Thank you for your interest in contributing to Nova Meet! We welcome contributions from everyone.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please read it before contributing.

## How to Contribute

### Reporting Bugs

1. **Check existing issues** - Search our issue tracker to see if the bug has already been reported.
2. **Create a detailed bug report** - Use our bug report template and include:
   - Clear description of the problem
   - Steps to reproduce
   - Expected vs actual behavior
   - Environment details (OS, browser, etc.)
   - Screenshots or error logs if applicable

### Suggesting Features

1. **Check existing feature requests** - Look through our issues to see if someone has already suggested your idea.
2. **Create a feature request** - Use our feature request template and include:
   - Clear description of the feature
   - Use case and motivation
   - Possible implementation ideas
   - Any relevant examples or mockups

### Contributing Code

#### Prerequisites

- Node.js (v16.0.0 or higher)
- npm or yarn
- Git
- MongoDB (for local development)
- Basic understanding of JavaScript/TypeScript, React, and Node.js

#### Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/Nova-Meet.git
   cd Nova-Meet
   ```
3. **Install dependencies**:
   ```bash
   npm run install:all
   ```
4. **Set up your development environment**:
   ```bash
   # Start MongoDB and Redis (using Docker)
   docker-compose -f docker-compose.dev.yml up -d
   
   # Copy environment files
   cp backend/.env.example backend/.env
   cp client/.env.example client/.env
   ```
5. **Start the development servers**:
   ```bash
   npm run dev
   ```

#### Development Workflow

1. **Create a feature branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. **Make your changes** following our coding standards
3. **Write tests** for your changes
4. **Run tests** to ensure everything works:
   ```bash
   npm test
   ```
5. **Run linting** to check code style:
   ```bash
   npm run lint
   ```
6. **Commit your changes** with clear commit messages:
   ```bash
   git commit -m "feat: add new video filter feature"
   ```
7. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```
8. **Create a Pull Request** using our PR template

## Coding Standards

### General Guidelines

- Write clear, readable, and maintainable code
- Follow existing code patterns and conventions
- Add comments for complex logic
- Keep functions small and focused
- Use meaningful variable and function names

### JavaScript/TypeScript

- Use ES6+ features
- Prefer `const` and `let` over `var`
- Use arrow functions where appropriate
- Follow ESLint configuration
- Use TypeScript types where applicable

### React Components

- Use functional components with hooks
- Keep components small and focused
- Use proper prop types or TypeScript interfaces
- Follow the component file structure:
  ```
  ComponentName/
  ├── index.ts
  ├── ComponentName.tsx
  ├── ComponentName.test.tsx
  ├── ComponentName.styles.ts
  └── types.ts
  ```

### Backend API

- Follow RESTful principles
- Use proper HTTP status codes
- Validate all inputs
- Handle errors gracefully
- Write comprehensive tests

### Database

- Use meaningful collection/table names
- Create proper indexes
- Follow data modeling best practices
- Write migration scripts for schema changes

## Testing

### Types of Tests

1. **Unit Tests** - Test individual functions and components
2. **Integration Tests** - Test API endpoints and component interactions
3. **E2E Tests** - Test complete user workflows

### Testing Guidelines

- Write tests for all new features
- Maintain high test coverage (>80%)
- Use descriptive test names
- Mock external dependencies
- Test both success and error cases

### Running Tests

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch

# Run E2E tests
npm run test:e2e
```

## Documentation

- Update README.md for significant changes
- Add inline code comments for complex logic
- Update API documentation for backend changes
- Include JSDoc comments for functions
- Update CHANGELOG.md for releases

## Commit Message Format

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
type(scope): description

[optional body]

[optional footer]
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Build process or auxiliary tool changes

### Examples

```
feat(video): add background blur filter
fix(auth): resolve login session timeout issue
docs(api): update authentication endpoint documentation
test(meeting): add unit tests for meeting creation
```

## Pull Request Guidelines

### Before Submitting

- [ ] Branch is up to date with main
- [ ] All tests pass
- [ ] Code is linted and formatted
- [ ] Documentation is updated
- [ ] CHANGELOG.md is updated (if applicable)

### PR Requirements

- Clear description of changes
- Link to related issue(s)
- Screenshots for UI changes
- Test coverage for new code
- No merge conflicts

### Review Process

1. **Automated checks** must pass (CI/CD pipeline)
2. **Code review** by at least one maintainer
3. **Testing** in staging environment (if applicable)
4. **Approval** from project maintainer
5. **Merge** using squash and merge

## Security

- Never commit sensitive information (passwords, tokens, etc.)
- Use environment variables for configuration
- Follow security best practices
- Report security vulnerabilities privately

## Getting Help

- **Documentation**: Check our README and wiki
- **Issues**: Search existing issues or create a new one
- **Discussions**: Use GitHub Discussions for questions
- **Discord**: Join our community Discord server
- **Email**: Contact maintainers at dev@nova-meet.com

## Recognition

Contributors will be recognized in:
- CONTRIBUTORS.md file
- Release notes
- Annual contributor appreciation post

Thank you for contributing to Nova Meet! 🎉
