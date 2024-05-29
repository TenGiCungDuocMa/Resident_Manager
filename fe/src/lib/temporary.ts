import axiosClient from '~/app/axiosClient'
import axios from 'axios'

export const getTamTrusByPage = async ({ page, offset }: Page) => {
  const response = await axiosClient.get(`/tam-tru?page=${page}&limit=${offset}`)
  if (!response) return

  const residents = (response.data.data as ITamTru[]).reduce(
    (acc: Map<string, ITamTru>, resident: ITamTru) => {
      acc.set(resident.id.toString(), resident)

      return acc
    },
    new Map<string, ITamTru>()
  )

  return { data: residents, total: response.data.total }
}

export const getTamVangsByPage = async ({ page, offset }: Page) => {
  const response = await axiosClient.get(`/tam-vang?page=${page}&limit=${offset}`)
  if (!response) return

  const residents = (response.data.data as ITamVang[]).reduce(
    (acc: Map<string, ITamVang>, resident: ITamVang) => {
      acc.set(resident.id.toString(), resident)

      return acc
    },
    new Map<string, ITamVang>()
  )

  return { data: residents, total: response.data.total }
}

export const createTamVang = async (id: string, tamTru: any) => {
  const response = await axiosClient.post(`/nhan-khau/${id}/tam-vang/create`, tamTru)
  if (!response) return

  return response.data
}

export const createTamTru = async (tamTru: any) => {
  const response = await axiosClient.post(`/tam-tru`, tamTru)
  if (!response) return

  return response.data
}

export const getCites = async () => {
  try {
    const response = await axios.get(`https://esgoo.net/api-tinhthanh/1/0.htm`)
    if (!response) return

    return response.data?.data || [];
  } catch (error) {
    console.error('Error fetching cities:', error);
    return [];
  }
}

export const getDistricts = async (cityId: string) => {
  try {
    const response = await axios.get(`https://esgoo.net/api-tinhthanh/2/${cityId}.htm`)
    if (!response) return

    return response.data?.data || [];
  } catch (error) {
    console.error('Error fetching districts:', error);
    return [];
  }
}

export const getWards = async (districtId: string) => {
  try {
    const response = await axios.get(`https://esgoo.net/api-tinhthanh/3/${districtId}.htm`)
    if (!response) return

    return response.data?.data || [];
  } catch (error) {
    console.error('Error fetching wards:', error);
    return [];
  }
}
