import { rest } from 'msw';

interface InquiryBody {
  name: string
  gender: string
  age: string
  number: string
  email: string
  budget: string
  location: string
  contents: string
  agreeCheck: boolean
}

interface InquiryResponse {
  name: string
}

export const handlers = [
  rest.post<InquiryBody, InquiryResponse>('/Inquiry', async (req, res, ctx) => {
    const { name, gender, age, number, email, budget, location, contents, agreeCheck } = await req.json();


    return res(
      ctx.json({
        name, gender, age, number, email, budget, location, contents, agreeCheck
      })
    )
  })
]