'use client'
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com/users',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

export async function repositories() {
  try {
    const response = await api.get('/claudioares/repos')

    return response.data
  } catch (error) {
    console.log(error)
  }
}
