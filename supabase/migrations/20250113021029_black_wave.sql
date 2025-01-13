/*
  # Insert Initial Blog Posts and Authors

  1. Data Population
    - Insert author data
    - Insert blog posts
    - Insert tags
    - Create post-tag relationships

  2. Content
    - 6 technical blog posts
    - Relevant tags
    - Author information
*/

-- First, insert the author
INSERT INTO authors (id, name, avatar, bio)
VALUES (
  'a1b2c3d4-e5f6-4321-8765-1a2b3c4d5e6f',
  'Sarah Chen',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
  'Senior Software Engineer with 10+ years of experience in web development and cloud architecture. Passionate about sharing knowledge and best practices in software development.'
) ON CONFLICT (id) DO NOTHING;

-- Insert tags
INSERT INTO tags (name) VALUES
  ('Web Development'),
  ('Cloud Computing'),
  ('JavaScript'),
  ('TypeScript'),
  ('React'),
  ('Software Architecture'),
  ('Performance'),
  ('Security'),
  ('Best Practices'),
  ('DevOps')
ON CONFLICT (name) DO NOTHING;

-- Insert blog posts
INSERT INTO posts (
  title,
  slug,
  excerpt,
  content,
  featured_image,
  category,
  published_at,
  author_id,
  status
) VALUES
(
  'Understanding TypeScript 5.0: A Deep Dive into New Features',
  'understanding-typescript-5-new-features',
  'Explore the latest features and improvements in TypeScript 5.0 and how they can enhance your development workflow.',
  E'TypeScript 5.0 brings several game-changing features that significantly improve developer productivity and type safety. Let''s explore the most impactful changes and how to leverage them in your projects.\n\n
## Decorators 2.0\n
One of the most anticipated features is the stable implementation of decorators. Unlike the experimental version, the new implementation follows the ECMAScript standard more closely and provides better type inference:\n\n
```typescript
function logged() {
  return function (target: any, context: ClassMethodDecoratorContext) {
    const methodName = String(context.name);
    return function (...args: any[]) {
      console.log(`Entering ${methodName}`);
      const result = target.apply(this, args);
      console.log(`Exiting ${methodName}`);
      return result;
    };
  };
}

class Example {
  @logged()
  greet(name: string) {
    return `Hello, ${name}!`;
  }
}
```\n\n
## const Type Parameters\n
The new `const` modifier for type parameters enables better inference for literal types:\n\n
```typescript
function first<const T extends readonly unknown[]>(array: T): T[0] {
  return array[0];
}

// Type is literally "hello"
const result = first(["hello", "world"]);
```\n\n
## Multiple Config Files Support\n
TypeScript 5.0 now supports extending from multiple configuration files, making it easier to manage complex project setups:\n\n
```json
{
  "extends": ["./tsconfig.base.json", "./tsconfig.paths.json"],
  "compilerOptions": {
    "outDir": "./dist"
  }
}
```\n\n
## Performance Improvements\n
The new version includes significant performance optimizations:\n\n
- Faster type checking through improved caching
- Reduced memory usage in the language service
- Optimized module resolution\n\n
## Best Practices for Adoption\n
When upgrading to TypeScript 5.0:\n\n
1. Review and update your existing decorators
2. Take advantage of const type parameters for better type inference
3. Consolidate your TypeScript configurations
4. Test thoroughly, especially if using experimental features\n\n
## Conclusion\n
TypeScript 5.0 represents a significant step forward in type safety and developer experience. The new features provide more tools for writing type-safe code while improving performance and maintainability.',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
  'Web Development',
  NOW() - INTERVAL '2 days',
  'a1b2c3d4-e5f6-4321-8765-1a2b3c4d5e6f',
  'published'
),
(
  'Optimizing React Performance: Advanced Techniques',
  'optimizing-react-performance-advanced-techniques',
  'Learn advanced techniques for optimizing React applications, from code splitting to efficient state management.',
  E'Performance optimization is crucial for delivering a great user experience in React applications. This guide covers advanced techniques to improve your app''s performance.\n\n
## Implementing Code Splitting\n
Code splitting is essential for reducing the initial bundle size:\n\n
```typescript
import { lazy, Suspense } from "react";

const HeavyComponent = lazy(() => import("./HeavyComponent"));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <HeavyComponent />
    </Suspense>
  );
}
```\n\n
## Optimizing Re-renders\n
Use memoization effectively to prevent unnecessary re-renders:\n\n
```typescript
import { useMemo, useCallback } from "react";

function ExpensiveComponent({ data, onUpdate }) {
  const processedData = useMemo(() => {
    return expensiveCalculation(data);
  }, [data]);

  const handleUpdate = useCallback(() => {
    onUpdate(processedData);
  }, [processedData, onUpdate]);

  return (
    // Component JSX
  );
}
```\n\n
## State Management Optimization\n
Implement efficient state updates using immutable patterns:\n\n
```typescript
function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_ITEM":
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, ...action.payload }
            : item
        )
      };
    default:
      return state;
  }
}
```\n\n
## Virtual List Implementation\n
For long lists, implement virtualization:\n\n
```typescript
function VirtualList({ items, rowHeight, visibleRows }) {
  const [scrollTop, setScrollTop] = useState(0);
  const startIndex = Math.floor(scrollTop / rowHeight);
  const visibleItems = items.slice(
    startIndex,
    startIndex + visibleRows
  );

  return (
    <div
      style={{ height: items.length * rowHeight }}
      onScroll={e => setScrollTop(e.target.scrollTop)}
    >
      <div style={{ transform: `translateY(${startIndex * rowHeight}px)` }}>
        {visibleItems.map(item => (
          <div key={item.id} style={{ height: rowHeight }}>
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}
```\n\n
## Performance Monitoring\n
Implement performance monitoring:\n\n
```typescript
import { Profiler } from "react";

function onRenderCallback(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime
) {
  console.log(`Component ${id} took ${actualDuration}ms to render`);
}

function App() {
  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <YourComponent />
    </Profiler>
  );
}
```\n\n
## Conclusion\n
Implementing these optimization techniques can significantly improve your React application''s performance. Remember to measure performance impacts before and after optimization to ensure your changes are effective.',
  'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800',
  'Web Development',
  NOW() - INTERVAL '5 days',
  'a1b2c3d4-e5f6-4321-8765-1a2b3c4d5e6f',
  'published'
),
(
  'Implementing Zero-Trust Security in Modern Cloud Applications',
  'implementing-zero-trust-security-cloud-applications',
  'Learn how to implement a zero-trust security model in your cloud applications using modern best practices and tools.',
  E'Zero-trust security has become essential in today''s cloud-native world. This guide explores implementing zero-trust principles in modern cloud applications.\n\n
## Core Principles of Zero Trust\n
The fundamental principles include:\n\n
- Never trust, always verify
- Least privilege access
- Assume breach
- Verify explicitly\n\n
## Implementation Strategies\n
### 1. Identity and Access Management\n
Implement robust authentication:\n\n
```typescript
import { auth } from "./auth-provider";

async function authenticateRequest(req: Request) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) throw new UnauthorizedError();

  try {
    const decoded = await auth.verifyToken(token);
    return validatePermissions(decoded);
  } catch (error) {
    throw new UnauthorizedError("Invalid token");
  }
}
```\n\n
### 2. Network Segmentation\n
Implement network policies:\n\n
```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: api-isolation
spec:
  podSelector:
    matchLabels:
      app: api
  ingress:
  - from:
    - podSelector:
        matchLabels:
          role: frontend
    ports:
    - protocol: TCP
      port: 8080
```\n\n
### 3. Encryption\n
Implement end-to-end encryption:\n\n
```typescript
import { createCipheriv, randomBytes } from "crypto";

function encryptData(data: string, key: Buffer): EncryptedData {
  const iv = randomBytes(16);
  const cipher = createCipheriv("aes-256-gcm", key, iv);
  
  const encrypted = Buffer.concat([
    cipher.update(data, "utf8"),
    cipher.final()
  ]);

  return {
    encrypted: encrypted.toString("base64"),
    iv: iv.toString("base64"),
    tag: cipher.getAuthTag().toString("base64")
  };
}
```\n\n
### 4. Continuous Monitoring\n
Implement logging and monitoring:\n\n
```typescript
interface SecurityEvent {
  timestamp: Date;
  action: string;
  resource: string;
  user: string;
  status: "success" | "failure";
  details: Record<string, unknown>;
}

class SecurityMonitor {
  async logSecurityEvent(event: SecurityEvent) {
    await this.validateEvent(event);
    await this.storeEvent(event);
    await this.analyzeForThreats(event);
  }

  private async analyzeForThreats(event: SecurityEvent) {
    // Implement threat detection logic
  }
}
```\n\n
## Best Practices\n
1. Implement strong authentication and authorization
2. Use micro-segmentation
3. Encrypt data in transit and at rest
4. Monitor and log all access attempts
5. Regularly update security policies\n\n
## Conclusion\n
Zero-trust security is not just a set of tools but a comprehensive approach to security. Regular audits and updates to your security posture are essential for maintaining effective protection.',
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
  'Security',
  NOW() - INTERVAL '10 days',
  'a1b2c3d4-e5f6-4321-8765-1a2b3c4d5e6f',
  'published'
),
(
  'Building Scalable Microservices with Node.js',
  'building-scalable-microservices-nodejs',
  'A comprehensive guide to designing and implementing scalable microservices architecture using Node.js and modern tools.',
  E'Microservices architecture has become the standard for building scalable applications. This guide explores building robust microservices with Node.js.\n\n
## Service Design Principles\n
Key principles for microservice design:\n\n
1. Single Responsibility
2. Domain-Driven Design
3. Service Independence
4. Asynchronous Communication\n\n
## Implementation Example\n
### Service Template\n
```typescript
import express from "express";
import { createClient } from "redis";
import { connect } from "amqplib";

class MicroserviceBase {
  private app: express.Application;
  private redis: ReturnType<typeof createClient>;
  private messageQueue: any;

  constructor() {
    this.app = express();
    this.setupMiddleware();
    this.setupRoutes();
    this.setupErrorHandling();
  }

  private async setupMessageQueue() {
    const connection = await connect(process.env.RABBITMQ_URL);
    this.messageQueue = await connection.createChannel();
  }

  protected async publishEvent(event: string, data: any) {
    await this.messageQueue.publish(
      "events",
      event,
      Buffer.from(JSON.stringify(data))
    );
  }
}
```\n\n
### API Gateway Implementation\n
```typescript
class ApiGateway extends MicroserviceBase {
  private serviceRegistry: Map<string, string>;

  constructor() {
    super();
    this.serviceRegistry = new Map();
  }

  private async routeRequest(req: Request, res: Response) {
    const service = this.serviceRegistry.get(req.path);
    if (!service) {
      throw new ServiceNotFoundError();
    }

    try {
      const response = await this.forwardRequest(service, req);
      res.status(response.status).send(response.data);
    } catch (error) {
      this.handleError(error, res);
    }
  }
}
```\n\n
### Service Discovery\n
Implement service discovery using Consul:\n\n
```typescript
import { Consul } from "consul";

class ServiceDiscovery {
  private consul: Consul;

  constructor() {
    this.consul = new Consul({
      host: process.env.CONSUL_HOST,
      port: process.env.CONSUL_PORT
    });
  }

  async registerService(
    name: string,
    address: string,
    port: number
  ) {
    await this.consul.agent.service.register({
      name,
      address,
      port,
      check: {
        http: `http://${address}:${port}/health`,
        interval: "10s"
      }
    });
  }
}
```\n\n
## Circuit Breaker Pattern\n
Implement circuit breaker for resilience:\n\n
```typescript
class CircuitBreaker {
  private failures: number = 0;
  private lastFailure: number = 0;
  private state: "closed" | "open" | "half-open" = "closed";

  async execute<T>(
    command: () => Promise<T>,
    fallback: () => Promise<T>
  ): Promise<T> {
    if (this.state === "open") {
      return fallback();
    }

    try {
      const result = await command();
      this.reset();
      return result;
    } catch (error) {
      this.handleFailure();
      return fallback();
    }
  }
}
```\n\n
## Monitoring and Logging\n
Implement centralized logging:\n\n
```typescript
import winston from "winston";
import { ElasticsearchTransport } from "winston-elasticsearch";

const logger = winston.createLogger({
  transports: [
    new ElasticsearchTransport({
      level: "info",
      clientOpts: { node: process.env.ELASTICSEARCH_URL }
    })
  ]
});
```\n\n
## Deployment Considerations\n
1. Use container orchestration (Kubernetes)
2. Implement CI/CD pipelines
3. Use infrastructure as code
4. Monitor service health and metrics\n\n
## Conclusion\n
Building scalable microservices requires careful consideration of design patterns, communication protocols, and operational concerns. Regular monitoring and optimization are key to maintaining a healthy microservices ecosystem.',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
  'Software Architecture',
  NOW() - INTERVAL '15 days',
  'a1b2c3d4-e5f6-4321-8765-1a2b3c4d5e6f',
  'published'
),
(
  'Advanced State Management Patterns in React Applications',
  'advanced-state-management-patterns-react',
  'Explore advanced state management patterns and best practices for complex React applications.',
  E'State management in complex React applications requires careful consideration of patterns and practices. Let''s explore advanced approaches to managing application state effectively.\n\n
## The Context + Reducer Pattern\n
Implement sophisticated state management:\n\n
```typescript
interface State {
  user: User | null;
  theme: Theme;
  notifications: Notification[];
}

type Action =
  | { type: "SET_USER"; payload: User }
  | { type: "UPDATE_THEME"; payload: Theme }
  | { type: "ADD_NOTIFICATION"; payload: Notification };

const AppContext = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
} | undefined>(undefined);

function appReducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "UPDATE_THEME":
      return { ...state, theme: action.payload };
    case "ADD_NOTIFICATION":
      return {
        ...state,
        notifications: [...state.notifications, action.payload]
      };
    default:
      return state;
  }
}
```\n\n
## Custom Hooks for State Logic\n
Encapsulate complex state logic:\n\n
```typescript
function useAsync<T>(
  asyncFn: () => Promise<T>,
  dependencies: any[] = []
) {
  const [state, setState] = useState<{
    data: T | null;
    loading: boolean;
    error: Error | null;
  }>({
    data: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    let mounted = true;

    asyncFn()
      .then(data => {
        if (mounted) {
          setState({ data, loading: false, error: null });
        }
      })
      .catch(error => {
        if (mounted) {
          setState({ data: null, loading: false, error });
        }
      });

    return () => {
      mounted = false;
    };
  }, dependencies);

  return state;
}
```\n\n
## State Machines\n
Implement state machines for complex UI states:\n\n
```typescript
interface StateMachine<S, E> {
  state: S;
  transition: (event: E) => void;
}

function createStateMachine<S extends string, E extends string>(
  config: Record<S, Partial<Record<E, S>>>
): StateMachine<S, E> {
  let currentState: S;

  return {
    get state() {
      return currentState;
    },
    transition(event: E) {
      const nextState = config[currentState][event];
      if (nextState) {
        currentState = nextState;
      }
    }
  };
}
```\n\n
## Optimistic Updates\n
Implement optimistic updates for better UX:\n\n
```typescript
function useOptimisticUpdate<T>(
  mutationFn: (data: T) => Promise<void>
) {
  const [state, setState] = useState<T[]>([]);

  const update = async (newData: T) => {
    // Optimistically update UI
    setState(prev => [...prev, newData]);

    try {
      await mutationFn(newData);
    } catch (error) {
      // Revert on failure
      setState(prev => prev.filter(item => item !== newData));
      throw error;
    }
  };

  return { state, update };
}
```\n\n
## Computed State\n
Implement computed state properties:\n\n
```typescript
function useComputed<T, R>(
  value: T,
  compute: (value: T) => R,
  dependencies: any[] = []
): R {
  return useMemo(() => compute(value), [value, ...dependencies]);
}

// Usage
const totalPrice = useComputed(
  items,
  items => items.reduce((sum, item) => sum + item.price, 0),
  []
);
```\n\n
## Best Practices\n
1. Keep state as local as possible
2. Use immutable update patterns
3. Implement proper error boundaries
4. Consider using state machines for complex flows
5. Optimize re-renders with proper memoization\n\n
## Conclusion\n
Advanced state management requires a combination of patterns and practices. Choose the right approach based on your application''s needs and complexity.',
  'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=800',
  'Web Development',
  NOW() - INTERVAL '20 days',
  'a1b2c3d4-e5f6-4321-8765-1a2b3c4d5e6f',
  'published'
),
(
  'Implementing CI/CD Pipelines for Modern Web Applications',
  'implementing-cicd-pipelines-web-applications',
  'Learn how to set up and optimize CI/CD pipelines for web applications using modern tools and best practices.',
  E'Continuous Integration and Continuous Deployment (CI/CD) are essential for modern web development. Let''s explore implementing robust CI/CD pipelines.\n\n
## Pipeline Architecture\n
A comprehensive CI/CD pipeline includes:\n\n
1. Code Quality Checks
2. Testing
3. Building
4. Security Scanning
5. Deployment\n\n
## GitHub Actions Implementation\n
```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: "16"
      
      - name: Install dependencies
        run: npm ci
      
      - name: Lint
        run: npm run lint
      
      - name: Type check
        run: npm run type-check

  test:
    needs: quality
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: "16"
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test -- --coverage
      
      - name: Upload coverage
        uses: codecov/codecov-action@v2

  security:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Security scan
        uses: snyk/actions/node@master
        env:
          SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
```\n\n
## Automated Testing Setup\n
Implement comprehensive testing:\n\n
```typescript
// jest.config.js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.d.ts",
    "!src/index.tsx",
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};

// Example test
describe("Authentication Flow", () => {
  it("should handle login process", async () => {
    const { result } = renderHook(() => useAuth());
    
    await act(async () => {
      await result.current.login({
        email: "test@example.com",
        password: "password123"
      });
    });
    
    expect(result.current.isAuthenticated).toBe(true);
  });
});
```\n\n
## Deployment Configuration\n
### Kubernetes Deployment\n
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web-app
  template:
    metadata:
      labels:
        app: web-app
    spec:
      containers:
      - name: web-app
        image: ${IMAGE_TAG}
        ports:
        - containerPort: 80
        env:
        - name: NODE_ENV
          value: production
        readinessProbe:
          httpGet:
            path: /health
            port: 80
```\n\n
## Monitoring and Alerting\n
Implement monitoring:\n\n
```typescript
import { Metrics } from "./monitoring";

class DeploymentMonitor {
  private metrics: Metrics;

  constructor() {
    this.metrics = new Metrics();
  }

  async monitorDeployment(deployment: Deployment) {
    const startTime = Date.now();
    
    try {
      await this.checkHealth(deployment);
      await this.validateMetrics(deployment);
      
      this.metrics.recordDeploymentSuccess({
        duration: Date.now() - startTime,
        version: deployment.version
      });
    } catch (error) {
      this.metrics.recordDeploymentFailure({
        error: error.message,
        version: deployment.version
      });
      
      await this.triggerRollback(deployment);
    }
  }
}
```\n\n
## Best Practices\n
1. Automate everything possible
2. Implement proper error handling
3. Use environment-specific configurations
4. Maintain comprehensive test coverage
5. Implement proper security scanning
6. Use infrastructure as code
7. Monitor deployment health\n\n
## Conclusion\n
A well-implemented CI/CD pipeline improves development efficiency and reduces deployment risks. Regular maintenance and updates are essential for keeping the pipeline effective.',
  'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
  'DevOps',
  NOW() - INTERVAL '25 days',
  'a1b2c3d4-e5f6-4321-8765-1a2b3c4d5e6f',
  'published'
);

-- Create post-tag relationships
WITH post_tags_data AS (
  SELECT 
    p.id as post_id,
    t.id as tag_id
  FROM posts p
  CROSS JOIN tags t
  WHERE 
    (p.title LIKE '%TypeScript%' AND t.name IN ('TypeScript', 'JavaScript', 'Web Development')) OR
    (p.title LIKE '%React%' AND t.name IN ('React', 'JavaScript', 'Web Development', 'Performance')) OR
    (p.title LIKE '%Security%' AND t.name IN ('Security', 'Cloud Computing', 'Best Practices')) OR
    (p.title LIKE '%Microservices%' AND t.name IN ('Software Architecture', 'Cloud Computing', 'Best Practices')) OR
    (p.title LIKE '%State Management%' AND t.name IN ('React', 'JavaScript', 'Web Development', 'Best Practices')) OR
    (p.title LIKE '%CI/CD%' AND t.name IN ('DevOps', 'Best Practices', 'Cloud Computing'))
)
INSERT INTO post_tags (post_id, tag_id)
SELECT post_id, tag_id FROM post_tags_data
ON CONFLICT DO NOTHING;