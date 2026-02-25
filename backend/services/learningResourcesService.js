const learningResources = {
  // Frontend Technologies
  'react': [
    { title: 'React Official Docs', url: 'https://react.dev/learn', type: 'Documentation', description: 'Official React documentation with interactive examples' },
    { title: 'React in 100 Seconds', url: 'https://www.youtube.com/watch?v=Tn6-PIqc4UM', type: 'Video', description: 'Quick overview of React fundamentals' },
    { title: 'React Hooks Tutorial', url: 'https://www.youtube.com/watch?v=O6P86uwfdR0', type: 'Video', description: 'Complete guide to React Hooks' }
  ],
  'vue': [
    { title: 'Vue.js Guide', url: 'https://vuejs.org/guide/', type: 'Documentation', description: 'Official Vue.js documentation' },
    { title: 'Vue.js Crash Course', url: 'https://www.youtube.com/watch?v=qZXt1Aom3Cs', type: 'Video', description: 'Learn Vue.js basics in one video' }
  ],
  'angular': [
    { title: 'Angular Docs', url: 'https://angular.io/docs', type: 'Documentation', description: 'Official Angular documentation' },
    { title: 'Angular Tutorial', url: 'https://www.youtube.com/watch?v=3qBXWUpoPHo', type: 'Video', description: 'Angular fundamentals tutorial' }
  ],
  'typescript': [
    { title: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/handbook/intro.html', type: 'Documentation', description: 'Official TypeScript handbook' },
    { title: 'TypeScript for Beginners', url: 'https://www.youtube.com/watch?v=d56mG7DezGs', type: 'Video', description: 'TypeScript crash course' }
  ],
  'javascript': [
    { title: 'MDN JavaScript Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide', type: 'Documentation', description: 'Comprehensive JavaScript guide' },
    { title: 'JavaScript ES6 Tutorial', url: 'https://www.youtube.com/watch?v=NCwa_xi0Uuc', type: 'Video', description: 'Modern JavaScript features' }
  ],
  'html': [
    { title: 'MDN HTML Basics', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML', type: 'Documentation', description: 'HTML fundamentals and best practices' },
    { title: 'HTML Crash Course', url: 'https://www.youtube.com/watch?v=UB1O30fR-EE', type: 'Video', description: 'HTML basics in one video' }
  ],
  'css': [
    { title: 'MDN CSS Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', type: 'Documentation', description: 'Complete CSS reference' },
    { title: 'CSS Flexbox Tutorial', url: 'https://www.youtube.com/watch?v=JJSoEo8JSnc', type: 'Video', description: 'Master CSS Flexbox layout' }
  ],
  
  // Backend Technologies
  'node.js': [
    { title: 'Node.js Docs', url: 'https://nodejs.org/en/docs/', type: 'Documentation', description: 'Official Node.js documentation' },
    { title: 'Node.js Crash Course', url: 'https://www.youtube.com/watch?v=fBNz5xF-Kx4', type: 'Video', description: 'Learn Node.js fundamentals' }
  ],
  'node': [
    { title: 'Node.js Docs', url: 'https://nodejs.org/en/docs/', type: 'Documentation', description: 'Official Node.js documentation' },
    { title: 'Node.js Crash Course', url: 'https://www.youtube.com/watch?v=fBNz5xF-Kx4', type: 'Video', description: 'Learn Node.js fundamentals' }
  ],
  'express': [
    { title: 'Express.js Guide', url: 'https://expressjs.com/en/guide/routing.html', type: 'Documentation', description: 'Official Express.js guide' },
    { title: 'Express.js Tutorial', url: 'https://www.youtube.com/watch?v=L72fhGm1tfE', type: 'Video', description: 'Build REST APIs with Express' }
  ],
  'python': [
    { title: 'Python Official Tutorial', url: 'https://docs.python.org/3/tutorial/', type: 'Documentation', description: 'Official Python tutorial' },
    { title: 'Python for Beginners', url: 'https://www.youtube.com/watch?v=rfscVS0vtbw', type: 'Video', description: 'Complete Python course' }
  ],
  'django': [
    { title: 'Django Documentation', url: 'https://docs.djangoproject.com/en/stable/', type: 'Documentation', description: 'Official Django docs' },
    { title: 'Django Tutorial', url: 'https://www.youtube.com/watch?v=rHux0gMZ3Eg', type: 'Video', description: 'Django web framework tutorial' }
  ],
  'java': [
    { title: 'Java Tutorials', url: 'https://docs.oracle.com/javase/tutorial/', type: 'Documentation', description: 'Official Java tutorials' },
    { title: 'Java Programming', url: 'https://www.youtube.com/watch?v=eIrMbAQSU34', type: 'Video', description: 'Java fundamentals course' }
  ],
  
  // Databases
  'mongodb': [
    { title: 'MongoDB University', url: 'https://learn.mongodb.com/', type: 'Course', description: 'Free MongoDB courses' },
    { title: 'MongoDB Crash Course', url: 'https://www.youtube.com/watch?v=-56x56UppqQ', type: 'Video', description: 'MongoDB basics tutorial' }
  ],
  'sql': [
    { title: 'SQL Tutorial', url: 'https://www.w3schools.com/sql/', type: 'Documentation', description: 'Interactive SQL tutorial' },
    { title: 'SQL in 60 Minutes', url: 'https://www.youtube.com/watch?v=HXV3zeQKqGY', type: 'Video', description: 'Quick SQL fundamentals' }
  ],
  'postgresql': [
    { title: 'PostgreSQL Docs', url: 'https://www.postgresql.org/docs/', type: 'Documentation', description: 'Official PostgreSQL documentation' },
    { title: 'PostgreSQL Tutorial', url: 'https://www.youtube.com/watch?v=qw--VYLpxG4', type: 'Video', description: 'PostgreSQL crash course' }
  ],
  
  // DevOps & Tools
  'docker': [
    { title: 'Docker Docs', url: 'https://docs.docker.com/get-started/', type: 'Documentation', description: 'Official Docker getting started guide' },
    { title: 'Docker Tutorial', url: 'https://www.youtube.com/watch?v=fqMOX6JJhGo', type: 'Video', description: 'Docker crash course' }
  ],
  'kubernetes': [
    { title: 'Kubernetes Docs', url: 'https://kubernetes.io/docs/tutorials/', type: 'Documentation', description: 'Official Kubernetes tutorials' },
    { title: 'Kubernetes Explained', url: 'https://www.youtube.com/watch?v=X48VuDVv0do', type: 'Video', description: 'Kubernetes fundamentals' }
  ],
  'git': [
    { title: 'Git Documentation', url: 'https://git-scm.com/doc', type: 'Documentation', description: 'Official Git documentation' },
    { title: 'Git Tutorial', url: 'https://www.youtube.com/watch?v=RGOj5yH7evk', type: 'Video', description: 'Git and GitHub crash course' }
  ],
  'aws': [
    { title: 'AWS Getting Started', url: 'https://aws.amazon.com/getting-started/', type: 'Documentation', description: 'AWS tutorials and guides' },
    { title: 'AWS Basics', url: 'https://www.youtube.com/watch?v=ulprqHHWlng', type: 'Video', description: 'AWS fundamentals course' }
  ],
  
  // API & Testing
  'api': [
    { title: 'REST API Tutorial', url: 'https://restfulapi.net/', type: 'Documentation', description: 'RESTful API design guide' },
    { title: 'API Design Best Practices', url: 'https://www.youtube.com/watch?v=_gQaygjm_hg', type: 'Video', description: 'Building great APIs' }
  ],
  'rest': [
    { title: 'REST API Tutorial', url: 'https://restfulapi.net/', type: 'Documentation', description: 'RESTful API design guide' },
    { title: 'REST API Crash Course', url: 'https://www.youtube.com/watch?v=Q-BpqyOT3a8', type: 'Video', description: 'REST API fundamentals' }
  ],
  'graphql': [
    { title: 'GraphQL Docs', url: 'https://graphql.org/learn/', type: 'Documentation', description: 'Official GraphQL documentation' },
    { title: 'GraphQL Tutorial', url: 'https://www.youtube.com/watch?v=ed8SzALpx1Q', type: 'Video', description: 'GraphQL crash course' }
  ],
  'testing': [
    { title: 'Testing Best Practices', url: 'https://testingjavascript.com/', type: 'Course', description: 'Comprehensive testing guide' },
    { title: 'Unit Testing Tutorial', url: 'https://www.youtube.com/watch?v=r9HdJ8P6GQI', type: 'Video', description: 'Software testing fundamentals' }
  ],
  'jest': [
    { title: 'Jest Documentation', url: 'https://jestjs.io/docs/getting-started', type: 'Documentation', description: 'Official Jest testing docs' },
    { title: 'Jest Crash Course', url: 'https://www.youtube.com/watch?v=7r4xVDI2vho', type: 'Video', description: 'Jest testing tutorial' }
  ],
  
  // Mobile
  'react native': [
    { title: 'React Native Docs', url: 'https://reactnative.dev/docs/getting-started', type: 'Documentation', description: 'Official React Native docs' },
    { title: 'React Native Tutorial', url: 'https://www.youtube.com/watch?v=0-S5a0eXPoc', type: 'Video', description: 'React Native crash course' }
  ],
  'flutter': [
    { title: 'Flutter Documentation', url: 'https://docs.flutter.dev/', type: 'Documentation', description: 'Official Flutter documentation' },
    { title: 'Flutter Tutorial', url: 'https://www.youtube.com/watch?v=1ukSR1GRtMU', type: 'Video', description: 'Flutter crash course' }
  ],
  
  // Authentication
  'authentication': [
    { title: 'Auth Best Practices', url: 'https://auth0.com/docs/get-started', type: 'Documentation', description: 'Authentication and authorization guide' },
    { title: 'JWT Tutorial', url: 'https://www.youtube.com/watch?v=7Q17ubqLfaM', type: 'Video', description: 'JSON Web Tokens explained' }
  ],
  'jwt': [
    { title: 'JWT.io', url: 'https://jwt.io/introduction', type: 'Documentation', description: 'JWT introduction and debugger' },
    { title: 'JWT Authentication', url: 'https://www.youtube.com/watch?v=mbsmsi7l3r4', type: 'Video', description: 'JWT authentication tutorial' }
  ]
};

function getLearningResources(skills) {
  const resources = {};
  
  skills.forEach(skill => {
    const skillLower = skill.toLowerCase().trim();
    
    // Direct match
    if (learningResources[skillLower]) {
      resources[skill] = learningResources[skillLower];
      return;
    }
    
    // Partial match
    for (const [key, value] of Object.entries(learningResources)) {
      if (skillLower.includes(key) || key.includes(skillLower)) {
        resources[skill] = value;
        return;
      }
    }
    
    // Generic fallback
    resources[skill] = [
      { 
        title: `${skill} Documentation`, 
        url: `https://www.google.com/search?q=${encodeURIComponent(skill + ' official documentation')}`, 
        type: 'Search', 
        description: `Search for ${skill} official documentation` 
      },
      { 
        title: `${skill} Tutorial`, 
        url: `https://www.youtube.com/results?search_query=${encodeURIComponent(skill + ' tutorial')}`, 
        type: 'Video', 
        description: `Video tutorials for ${skill}` 
      }
    ];
  });
  
  return resources;
}

module.exports = { getLearningResources };
