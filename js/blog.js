// ============ BLOG SCRIPT ============
// Blog posts data - can be loaded from JSON or kept here
const blogPosts = [
    {
        id: 1,
        title: "Getting Started with AWS VPC",
        category: "aws",
        date: "2026-05-20",
        author: "Rupam Gachchhit",
        excerpt: "Learn how to create and configure your first AWS Virtual Private Cloud (VPC) with public and private subnets.",
        content: `
            <h3>Understanding AWS VPC</h3>
            <p>A Virtual Private Cloud (VPC) is a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define.</p>
            
            <h4>Key Components:</h4>
            <ul>
                <li><strong>Subnets:</strong> Ranges of IP addresses in your VPC</li>
                <li><strong>Internet Gateway:</strong> Enables communication with the internet</li>
                <li><strong>NAT Gateway:</strong> Allows private instances to access internet</li>
                <li><strong>Route Tables:</strong> Set of rules for directing traffic</li>
                <li><strong>Security Groups:</strong> Virtual firewalls for instances</li>
            </ul>

            <h4>Step-by-Step Setup:</h4>
            <ol>
                <li>Create a VPC with CIDR block 10.0.0.0/16</li>
                <li>Create public subnet (10.0.1.0/24)</li>
                <li>Create private subnet (10.0.2.0/24)</li>
                <li>Attach Internet Gateway</li>
                <li>Configure route tables</li>
            </ol>

            <p>Best practices include implementing proper security groups, NACLs, and enabling VPC Flow Logs for monitoring.</p>
        `,
        tags: ["AWS", "Networking", "VPC"],
        readTime: "8 min"
    },
    {
        id: 2,
        title: "Network Security Best Practices",
        category: "security",
        date: "2026-05-15",
        author: "Rupam Gachchhit",
        excerpt: "Essential security practices for protecting your cloud infrastructure from cyber threats.",
        content: `
            <h3>Network Security Fundamentals</h3>
            <p>Network security is the foundation of any robust infrastructure. Let's explore the essential best practices.</p>

            <h4>Defense in Depth Strategy:</h4>
            <ul>
                <li>Multiple layers of security</li>
                <li>Layered approach to protection</li>
                <li>Redundancy at each level</li>
            </ul>

            <h4>Implementation Guide:</h4>
            <ol>
                <li>Network segmentation using subnets</li>
                <li>Security groups and NACLs</li>
                <li>VPN and encryption</li>
                <li>DDoS protection</li>
                <li>Regular security audits</li>
            </ol>
        `,
        tags: ["Security", "Networking", "Best Practices"],
        readTime: "6 min"
    },
    {
        id: 3,
        title: "DevSecOps: Integrating Security in CI/CD",
        category: "devsecops",
        date: "2026-05-10",
        author: "Rupam Gachchhit",
        excerpt: "How to implement security practices throughout your deployment pipeline for continuous protection.",
        content: `
            <h3>DevSecOps Pipeline Integration</h3>
            <p>DevSecOps brings security into the development and operations workflow from the beginning.</p>

            <h4>Core Principles:</h4>
            <ul>
                <li>Shift left on security</li>
                <li>Automated security testing</li>
                <li>Continuous compliance monitoring</li>
            </ul>
        `,
        tags: ["DevSecOps", "CI/CD", "Automation"],
        readTime: "7 min"
    },
    {
        id: 4,
        title: "Introduction to OSPF Routing Protocol",
        category: "networking",
        date: "2026-05-05",
        author: "Rupam Gachchhit",
        excerpt: "A comprehensive guide to Open Shortest Path First (OSPF) dynamic routing protocol configuration.",
        content: `
            <h3>OSPF Basics</h3>
            <p>OSPF is a dynamic routing protocol that determines routes based on path cost using a shortest path first algorithm.</p>

            <h4>OSPF Areas:</h4>
            <ul>
                <li>Backbone Area (Area 0)</li>
                <li>Regular Areas</li>
                <li>Stub Areas</li>
            </ul>
        `,
        tags: ["Networking", "Routing", "OSPF"],
        readTime: "9 min"
    },
    {
        id: 5,
        title: "AWS Lambda: Serverless Computing Essentials",
        category: "aws",
        date: "2026-04-30",
        author: "Rupam Gachchhit",
        excerpt: "Master serverless computing with AWS Lambda for cost-effective, scalable applications.",
        content: `
            <h3>Understanding Lambda</h3>
            <p>AWS Lambda allows you to run code without provisioning or managing servers.</p>

            <h4>Lambda Use Cases:</h4>
            <ul>
                <li>Data processing</li>
                <li>Real-time file processing</li>
                <li>Stream processing</li>
                <li>Web applications</li>
            </ul>
        `,
        tags: ["AWS", "Lambda", "Serverless"],
        readTime: "10 min"
    }
];

// ============ RENDER BLOG POSTS ============
function renderBlogPosts(posts = blogPosts) {
    const blogContainer = document.getElementById('blogContainer');
    blogContainer.innerHTML = '';

    if (posts.length === 0) {
        blogContainer.innerHTML = '<div class="alert alert-info">No posts found.</div>';
        return;
    }

    posts.forEach(post => {
        const postDate = new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        const postHTML = `
            <div class="blog-card" data-category="${post.category}">
                <div class="blog-meta">
                    <span><i class="far fa-calendar"></i> ${postDate}</span>
                    <span><i class="far fa-user"></i> ${post.author}</span>
                    <span><i class="far fa-clock"></i> ${post.readTime}</span>
                </div>
                <h4 class="fw-bold mb-3">${post.title}</h4>
                <p class="text-muted mb-3">${post.excerpt}</p>
                <div class="blog-tags">
                    ${post.tags.map(tag => `<span class="badge bg-primary">${tag}</span>`).join('')}
                </div>
                <div class="mt-3">
                    <button class="btn btn-sm btn-outline-primary read-more-btn" data-post-id="${post.id}">
                        Read More <i class="fas fa-arrow-right ms-2"></i>
                    </button>
                </div>
            </div>
        `;

        blogContainer.innerHTML += postHTML;
    });

    // Add event listeners to read more buttons
    document.querySelectorAll('.read-more-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const postId = parseInt(e.target.closest('button').dataset.postId);
            showBlogDetail(postId);
        });
    });
}

// ============ SHOW BLOG DETAIL ============
function showBlogDetail(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (!post) return;

    const postDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const detailHTML = `
        <div class="blog-detail mb-5">
            <button class="btn btn-sm btn-outline-secondary mb-4" onclick="renderBlogPosts()">
                <i class="fas fa-arrow-left me-2"></i> Back to Posts
            </button>
            <h2 class="display-5 fw-bold mb-4">${post.title}</h2>
            <div class="blog-meta mb-4">
                <span><i class="far fa-calendar"></i> ${postDate}</span>
                <span class="ms-3"><i class="far fa-user"></i> ${post.author}</span>
                <span class="ms-3"><i class="far fa-clock"></i> ${post.readTime}</span>
            </div>
            <hr>
            <div class="blog-content mt-4">
                ${post.content}
            </div>
            <hr class="my-5">
            <div class="blog-tags mb-4">
                <strong>Tags:</strong><br>
                ${post.tags.map(tag => `<span class="badge bg-primary me-2 mt-2">${tag}</span>`).join('')}
            </div>
            <div class="mt-5 p-4 bg-primary bg-opacity-10 rounded">
                <h5 class="fw-bold mb-3">Share This Article</h5>
                <div class="social-links">
                    <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${window.location.href}" target="_blank" class="btn btn-sm btn-primary me-2">
                        <i class="fab fa-twitter"></i> Twitter
                    </a>
                    <a href="https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}" target="_blank" class="btn btn-sm btn-primary me-2">
                        <i class="fab fa-linkedin"></i> LinkedIn
                    </a>
                    <a href="https://www.facebook.com/sharer/sharer.php?u=${window.location.href}" target="_blank" class="btn btn-sm btn-primary me-2">
                        <i class="fab fa-facebook"></i> Facebook
                    </a>
                </div>
            </div>
        </div>
    `;

    document.getElementById('blogContainer').innerHTML = detailHTML;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============ SEARCH FUNCTIONALITY ============
function searchBlog(query) {
    const filtered = blogPosts.filter(post => 
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
    renderBlogPosts(filtered);
}

// ============ CATEGORY FILTER ============
function filterByCategory(category) {
    const filtered = category ? blogPosts.filter(post => post.category === category) : blogPosts;
    renderBlogPosts(filtered);
}

// ============ POPULATE RECENT POSTS ============
function populateRecentPosts() {
    const recentPostsContainer = document.getElementById('recentPosts');
    if (!recentPostsContainer) return;
    
    const recent = blogPosts.slice(0, 5);

    recent.forEach(post => {
        const li = document.createElement('li');
        li.innerHTML = `
            <a href="#" class="text-decoration-none small mb-3 d-block text-muted recent-post-link" data-post-id="${post.id}">
                <i class="fas fa-arrow-right me-2"></i> ${post.title}
            </a>
        `;
        li.style.marginBottom = '10px';
        recentPostsContainer.appendChild(li);

        li.querySelector('.recent-post-link').addEventListener('click', (e) => {
            e.preventDefault();
            showBlogDetail(post.id);
        });
    });
}

// ============ EVENT LISTENERS ============
document.addEventListener('DOMContentLoaded', () => {
    // Render initial blog posts
    if (document.getElementById('blogContainer')) {
        renderBlogPosts();
        populateRecentPosts();
    }

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchBlog(e.target.value);
        });
    }

    // Category filter
    document.querySelectorAll('[data-category]').forEach(el => {
        if (el.classList.contains('recent-post-link')) return;
        
        el.addEventListener('click', (e) => {
            const category = e.target.closest('[data-category]')?.dataset.category;
            if (category) {
                filterByCategory(category);
            }
        });
    });

    // Search button
    const searchBtn = document.querySelector('.input-group button');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const query = document.getElementById('searchInput').value;
            searchBlog(query);
        });
    }
});

console.log('✓ Blog script loaded successfully');
