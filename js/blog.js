// ============ BLOG DATA ============
const blogPosts = [
    {
        id: 1,
        title: "Getting Started with AWS VPC",
        category: "aws",
        date: "2026-05-20",
        author: "Rupam Gachchhit",
        excerpt: "Learn how to create and configure your first AWS Virtual Private Cloud (VPC) with public and private subnets.",
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
        tags: ["Security", "Networking"],
        readTime: "6 min"
    },
    {
        id: 3,
        title: "DevSecOps: Integrating Security in CI/CD",
        category: "devsecops",
        date: "2026-05-10",
        author: "Rupam Gachchhit",
        excerpt: "How to implement security practices throughout your deployment pipeline.",
        tags: ["DevSecOps", "CI/CD"],
        readTime: "7 min"
    },
    {
        id: 4,
        title: "Introduction to OSPF Routing Protocol",
        category: "networking",
        date: "2026-05-05",
        author: "Rupam Gachchhit",
        excerpt: "A comprehensive guide to Open Shortest Path First (OSPF) dynamic routing protocol configuration.",
        tags: ["Networking", "Routing"],
        readTime: "9 min"
    },
    {
        id: 5,
        title: "AWS Lambda: Serverless Computing Essentials",
        category: "aws",
        date: "2026-04-30",
        author: "Rupam Gachchhit",
        excerpt: "Master serverless computing with AWS Lambda for cost-effective, scalable applications.",
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
        const postDate = new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        const postHTML = `<div class="blog-card"><div class="blog-meta"><span><i class="far fa-calendar"></i> ${postDate}</span><span><i class="far fa-user"></i> ${post.author}</span><span><i class="far fa-clock"></i> ${post.readTime}</span></div><h4 class="fw-bold mb-3">${post.title}</h4><p class="text-muted mb-3">${post.excerpt}</p><div class="blog-tags">${post.tags.map(tag => `<span class="badge bg-primary">${tag}</span>`).join('')}</div></div>`;
        blogContainer.innerHTML += postHTML;
    });
}

// ============ SEARCH FUNCTIONALITY ============
function searchBlog(query) {
    const filtered = blogPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()) || post.excerpt.toLowerCase().includes(query.toLowerCase()));
    renderBlogPosts(filtered);
}

// ============ EVENT LISTENERS ============
document.addEventListener('DOMContentLoaded', () => {
    renderBlogPosts();
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => { searchBlog(e.target.value); });
    }
});

console.log('✓ Blog script loaded successfully');