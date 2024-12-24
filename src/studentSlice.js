import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiBase = 'http://localhost:3000/api/users';

// Fetch students
export const fetchStudents = createAsyncThunk('students/fetch', async (_, thunkAPI) => {
  try {
    const response = await fetch(apiBase, {
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch students: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message || 'Unknown error occurred');
  }
});

// Create a new student
export const createStudent = createAsyncThunk('students/create', async (student, thunkAPI) => {
  try {
    const response = await fetch(apiBase, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student),
    });
    if (!response.ok) {
      throw new Error(`Failed to create student: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message || 'Unknown error occurred');
  }
});

// Delete a student
export const deleteStudent = createAsyncThunk('students/delete', async (id, thunkAPI) => {
  try {
    const response = await fetch(`${apiBase}/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
      throw new Error(`Failed to delete student: ${response.status} ${response.statusText}`);
    }
    return id; // Return the ID of the deleted student
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message || 'Unknown error occurred');
  }
});

const studentSlice = createSlice({
  name: 'students',
  initialState: { students: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch students
      .addCase(fetchStudents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.students = action.payload;
        state.loading = false;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Use payload for error message
      })

      // Create student
      .addCase(createStudent.pending, (state) => {
        state.loading = true;
      })
      .addCase(createStudent.fulfilled, (state, action) => {
        state.students.push(action.payload);
        state.loading = false;
      })
      .addCase(createStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete student
      .addCase(deleteStudent.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.students = state.students.filter((s) => s.id !== action.payload);
        state.loading = false;
      })
      .addCase(deleteStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default studentSlice.reducer;
