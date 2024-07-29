import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { completeUpload, createUpload, uploadFile, uploadFileChunk } from "../services/uploadService";

interface UploadStatus  {
    uuid: string | null,
    status: string,
    error: string | null
}

const initialState: UploadStatus = {
    uuid: null,
    status: 'pending',
    error: null
}

interface CreateResponse {

}

export const uploadSlice = createSlice({
    name: 'upload',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createUpload.pending, (state) => {
            state.status = 'pending'
        }).addCase(createUpload.fulfilled, (state, action: PayloadAction<CreateResponse>) => {
            state.status = 'success'
        }).addCase(createUpload.fulfilled, (state, action: PayloadAction<CreateResponse>) => {
            state.status = 'failed'
        }).addCase(uploadFileChunk.pending, (state) => {
            state.status = 'pending'
        }).addCase(uploadFileChunk.fulfilled, (state, action: PayloadAction<CreateResponse>) => {
            state.status = 'success'
        }).addCase(uploadFileChunk.fulfilled, (state, action: PayloadAction<CreateResponse>) => {
            state.status = 'failed'
        }).addCase(uploadFile.pending, (state) => {
            state.status = 'pending'
        }).addCase(uploadFile.fulfilled, (state, action: PayloadAction<CreateResponse>) => {
            state.status = 'success'
        }).addCase(uploadFile.fulfilled, (state, action: PayloadAction<CreateResponse>) => {
            state.status = 'failed'
        }).addCase(completeUpload.pending, (state) => {
            state.status = 'pending'
        }).addCase(completeUpload.fulfilled, (state, action: PayloadAction<CreateResponse>) => {
            state.status = 'success'
        }).addCase(completeUpload.fulfilled, (state, action: PayloadAction<CreateResponse>) => {
            state.status = 'failed'
        })
    }

})