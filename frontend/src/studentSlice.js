import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiBase = 'https://instinctive-studio-assign-keeh-qudvvv59j.vercel.app/api/users';


export const fetchStudents = createAsyncThunk('students/fetch', async (_, thunkAPI) => {
    try {
      const response = await fetch(apiBase);
      if (!response.ok) {
        throw new Error('Failed to fetch students');
      }
      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });
  

export const createStudent = createAsyncThunk('students/create', async (student) => {
  const response = await fetch(apiBase, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student),
  });
  return response.json();
});

export const deleteStudent = createAsyncThunk('students/delete', async (id) => {
  await fetch(`${apiBase}/${id}`, { method: 'DELETE' });
  return id;
});

const studentSlice = createSlice({
    name: 'students',
    initialState: { students: [], loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
      builder
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
          state.error = action.error.message;
        })
        .addCase(createStudent.fulfilled, (state, action) => {
          state.students.push(action.payload);
        })
        .addCase(deleteStudent.fulfilled, (state, action) => {
          state.students = state.students.filter((s) => s.id !== action.payload);
        });
    },
  });
export default studentSlice.reducer;
