<?php

namespace Database\Factories;

use App\Models\Book;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Book>
 */
class BookFactory extends Factory
{
    protected $model = Book::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => $this->faker->sentence(3),      // Generates a random book title
            'author' => $this->faker->name,             // Generates a random author name
            'published_year' => $this->faker->year,     // Generates a random year
            'genre' => $this->faker->word,              // Generates a random genre
            'description' => $this->faker->paragraph,   // Generates a random description
        ];
    }
}
