<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Retrieve all books from the database
        $books = Book::all();

        // Return the books as a JSON response
        return response()->json($books);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            // Validate the incoming request data
            $validatedBook = $request->validate([
                'title' => 'required|max:255',
                'author' => 'required|max:255',
                'published_year' => 'required|digits:4', 
                'genre' => 'required|string|max:255', 
                'description' => 'required|string', 
            ]);
    
            // Create a new book using the validated data
            $book = Book::create($validatedBook);
    
            // Return the created book as a JSON response
            return response()->json($book, 200);
        } catch (ValidationException $e) {
            // Handle validation errors
            return response()->json([
                'validationErrors' => $e->errors(),
            ], 404);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
         // Find the book by its ID
        $books = Book::find($id);

        // Check if the book exists
        if (!$books) {
            return response()->json(['message' => 'Book not found'], 404);
        }

        // Return the book as a JSON response
        return response()->json($books);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // Find the book by ID
        $book = Book::find($id);

        // Check if the book exists
        if (!$book) {
            return response()->json([
                'error' => 'Book not found',
            ], 404);
        }

        // Validate the incoming request data
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'author' => 'required|string|max:255',
            'published_year' => 'nullable|digits:4',
            'genre' => 'nullable|string|max:255',
            'description' => 'nullable|string',
        ]);

        // Update the book with validated data
        $book->update($validatedData);

        // Return the updated book as a JSON response
        return response()->json([
            'message' => 'Book updated successfully',
            'book' => $book,
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // Find the book by ID
        $book = Book::find($id);

        // Check if the book exists
        if (!$book) {
            return response()->json([
                'error' => 'Book not found',
            ], 404);
        }

        // Delete the book
        $book->delete();

        // Return a success response
        return response()->json([
            'message' => 'Book deleted successfully',
        ], 200);
    }
}
