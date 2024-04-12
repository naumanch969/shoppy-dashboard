import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Contact } from "../../interfaces";
import axios from "axios";
import { SERVER_URL } from "../../constants";

interface ContactState {
  contact?: Contact;
  contacts: Contact[];
  isLoading: boolean;
  error: string | null;
}

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const { data } = await axios.get(`${SERVER_URL}/contacts`);
    return data.users;
  }
);

const initialState: ContactState = {
  contact: undefined,
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    resetState: () => initialState,
    setContactSlice: (state, action: PayloadAction<Contact>) => {
      state.contact = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error?.message as string;
      })
      .addDefaultCase((state) => state);
  },
});

export default contactsSlice.reducer;
export const { resetState, setContactSlice } = contactsSlice.actions;
