import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiClock, FiCalendar } from 'react-icons/fi';

export default function LaravelTipsPost() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] py-12 px-6">
      <article className="max-w-3xl mx-auto">
        
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors mb-8"
        >
          <FiArrowLeft /> Back to Portfolio
        </button>

        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {['Laravel', 'PHP', 'Tips'].map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[var(--accent-glow)] text-[var(--accent)] border border-[var(--accent)]/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-6 leading-tight">
            5 Laravel Tips I Wish I Knew Earlier
          </h1>

          <div className="flex items-center gap-6 text-sm text-[var(--text-secondary)]">
            <span className="flex items-center gap-2">
              <FiCalendar />
              February 2024
            </span>
            <span className="flex items-center gap-2">
              <FiClock />
              5 min read
            </span>
          </div>
        </header>

        <div className="prose prose-invert max-w-none space-y-6 text-[var(--text-secondary)]">
          
          <p className="text-lg leading-relaxed">
            After working with Laravel for over 2 years, I've learned some tips and tricks that would have saved me countless hours of debugging. Here are 5 Laravel tips I wish I knew when I started.
          </p>

          <h2 className="font-display font-bold text-2xl text-[var(--text-primary)] mt-8 mb-4">
            1. Use Query Scopes for Reusable Queries
          </h2>
          <p>
            Instead of repeating the same query logic everywhere, use query scopes in your models. This makes your code cleaner and more maintainable.
          </p>

          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-6 my-6 overflow-x-auto">
            <pre className="text-sm">
              <code className="text-emerald-400">
{`// In your Model
public function scopeActive($query) {
    return $query->where('status', 'active');
}

public function scopeRecent($query) {
    return $query->orderBy('created_at', 'desc');
}

// Usage
$posts = Post::active()->recent()->get();`}
              </code>
            </pre>
          </div>

          <h2 className="font-display font-bold text-2xl text-[var(--text-primary)] mt-8 mb-4">
            2. Use API Resources for Consistent JSON Responses
          </h2>
          <p>
            API Resources give you full control over how your models are transformed into JSON. This ensures consistent API responses across your application.
          </p>

          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-6 my-6 overflow-x-auto">
            <pre className="text-sm">
              <code className="text-emerald-400">
{`// Create resource: php artisan make:resource UserResource

public function toArray($request) {
    return [
        'id' => $this->id,
        'name' => $this->name,
        'email' => $this->email,
        'created_at' => $this->created_at->format('Y-m-d'),
    ];
}`}
              </code>
            </pre>
          </div>

          <h2 className="font-display font-bold text-2xl text-[var(--text-primary)] mt-8 mb-4">
            3. Eager Loading to Avoid N+1 Queries
          </h2>
          <p>
            The N+1 query problem can kill your application's performance. Always use eager loading when accessing relationships.
          </p>

          <div className="pro-card my-6">
            <p className="text-red-400 font-bold mb-2">❌ Bad (N+1 Problem):</p>
            <code className="text-sm">$users = User::all();</code>
            <p className="text-emerald-400 font-bold mt-4 mb-2">✅ Good (Eager Loading):</p>
            <code className="text-sm">{`$users = User::with('posts')->get();`}</code>
          </div>

          <h2 className="font-display font-bold text-2xl text-[var(--text-primary)] mt-8 mb-4">
            4. Use Form Requests for Validation
          </h2>
          <p>
            Keep your controllers clean by moving validation logic to Form Request classes. This also makes validation rules reusable.
          </p>

          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-6 my-6 overflow-x-auto">
            <pre className="text-sm">
              <code className="text-emerald-400">
{`// Create: php artisan make:request StorePostRequest

public function rules() {
    return [
        'title' => 'required|max:255',
        'content' => 'required',
        'status' => 'in:draft,published',
    ];
}

// In Controller
public function store(StorePostRequest $request) {
    // Validation already done!
    Post::create($request->validated());
}`}
              </code>
            </pre>
          </div>

          <h2 className="font-display font-bold text-2xl text-[var(--text-primary)] mt-8 mb-4">
            5. Use Database Transactions for Data Integrity
          </h2>
          <p>
            When performing multiple database operations that depend on each other, wrap them in a transaction. If any operation fails, everything rolls back.
          </p>

          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-6 my-6 overflow-x-auto">
            <pre className="text-sm">
              <code className="text-emerald-400">
{`DB::transaction(function () {
    $user = User::create($userData);
    $user->profile()->create($profileData);
    $user->sendWelcomeEmail();
});

// If any operation fails, everything rolls back!`}
              </code>
            </pre>
          </div>

          <h2 className="font-display font-bold text-2xl text-[var(--text-primary)] mt-8 mb-4">
            Bonus Tip: Use Laravel Debugbar
          </h2>
          <p>
            Install Laravel Debugbar to see all queries, view data, and performance metrics. It's a game-changer for debugging.
          </p>

          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-6 my-6">
            <code className="text-sm text-emerald-400">
              composer require barryvdh/laravel-debugbar --dev
            </code>
          </div>

          <h2 className="font-display font-bold text-2xl text-[var(--text-primary)] mt-8 mb-4">
            Conclusion
          </h2>
          <p>
            These tips have saved me countless hours of debugging and made my Laravel code much cleaner. Start implementing them in your projects today!
          </p>

          <div className="pro-card bg-gradient-to-r from-[var(--accent-glow)] to-transparent mt-12 text-center">
            <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3">
              Need a Laravel developer?
            </h3>
            <button
              onClick={() => navigate('/hire-me')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-mid)] text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all"
            >
              Hire Me →
            </button>
          </div>

        </div>

      </article>
    </div>
  );
}
