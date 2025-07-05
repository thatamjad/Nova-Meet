# Security Policy

## Supported Versions

We provide security updates for the following versions of Nova Meet:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of Nova Meet seriously. If you believe you have found a security vulnerability, please report it to us as described below.

### How to Report

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them via email to: **security@nova-meet.com**

You should receive a response within 48 hours. If for some reason you do not, please follow up via email to ensure we received your original message.

### What to Include

Please include the following information in your report:

- Type of issue (e.g. buffer overflow, SQL injection, cross-site scripting, etc.)
- Full paths of source file(s) related to the manifestation of the issue
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit the issue

### Disclosure Policy

When we receive a security bug report, we will:

1. **Confirm** the problem and determine the affected versions
2. **Audit** code to find any potential similar problems
3. **Prepare** fixes for all releases still under support
4. **Release** new versions as soon as possible
5. **Announce** the vulnerability in our security advisories

### Preferred Languages

We prefer all communications to be in English.

## Security Best Practices

### For Users

1. **Keep Nova Meet Updated**: Always use the latest version
2. **Use HTTPS**: Ensure all connections are encrypted
3. **Strong Passwords**: Use strong, unique passwords
4. **Two-Factor Authentication**: Enable 2FA when available
5. **Network Security**: Use secure networks for video calls
6. **Screen Sharing**: Be cautious about what you share
7. **Meeting Security**: Use waiting rooms and passwords for sensitive meetings

### For Developers

1. **Code Review**: All code changes must be reviewed
2. **Input Validation**: Validate and sanitize all inputs
3. **Authentication**: Use strong authentication mechanisms
4. **Authorization**: Implement proper access controls
5. **Encryption**: Encrypt sensitive data in transit and at rest
6. **Logging**: Log security events appropriately
7. **Dependencies**: Keep dependencies updated and scan for vulnerabilities
8. **Environment Variables**: Use environment variables for sensitive configuration
9. **CORS**: Configure CORS properly
10. **Rate Limiting**: Implement rate limiting for APIs

## Security Features

Nova Meet includes the following security features:

### End-to-End Encryption
- All video and audio streams are encrypted
- Encryption keys are generated for each meeting
- No plaintext media data is stored on servers

### Authentication & Authorization
- JWT-based authentication
- Role-based access control
- Session management with automatic expiration

### Network Security
- HTTPS/WSS encryption for all communications
- CORS protection
- Rate limiting for API endpoints
- DDoS protection

### Data Protection
- Minimal data collection
- Data retention policies
- GDPR compliance measures
- Regular security audits

### Meeting Security
- Meeting passwords
- Waiting rooms
- Host controls for participant management
- Screen sharing permissions

## Security Testing

We regularly perform:

- **Static Code Analysis**: Automated scanning for security issues
- **Dependency Scanning**: Regular updates and vulnerability checks
- **Penetration Testing**: Regular security assessments
- **Security Audits**: Code and infrastructure reviews

## Third-Party Security Tools

We use the following tools to maintain security:

- **GitHub Security Advisories**: For vulnerability management
- **Dependabot**: For dependency updates
- **CodeQL**: For code analysis
- **Trivy**: For container scanning
- **ESLint Security Plugin**: For JavaScript security linting

## Security Contacts

- **Security Team**: security@nova-meet.com
- **General Contact**: support@nova-meet.com
- **Emergency Contact**: +1-XXX-XXX-XXXX (for critical security issues only)

## Acknowledgments

We would like to thank the following researchers for responsibly disclosing vulnerabilities:

- [Your name could be here!]

## Legal

This security policy is subject to our [Terms of Service](link-to-terms) and [Privacy Policy](link-to-privacy).

---

Thank you for helping keep Nova Meet and our users safe! 🔒
