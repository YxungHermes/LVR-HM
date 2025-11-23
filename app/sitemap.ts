import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://michael-andrade.com'
  const currentDate = new Date()

  // Core pages
  const corePages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/films`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/consultation`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact/inquiry`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Legal pages
  const legalPages = [
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  // Offerings pages
  const offeringsPages = [
    'elopements',
    'wedding-day-films',
    'destination-weddings',
    'couples-films',
  ].map((offering) => ({
    url: `${baseUrl}/offerings/${offering}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Process pages
  const processPages = [
    'approach',
    'what-to-expect',
    'investment',
  ].map((page) => ({
    url: `${baseUrl}/process/${page}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Cultural wedding pages
  const culturalPages = [
    'catholic',
    'jewish',
    'hindu',
    'muslim',
    'greek-orthodox',
    'chinese',
    'nigerian',
    'korean',
    'filipino',
    'sikh',
    'mexican',
  ].map((tradition) => ({
    url: `${baseUrl}/weddings/${tradition}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Combine all pages
  return [
    ...corePages,
    ...legalPages,
    ...offeringsPages,
    ...processPages,
    ...culturalPages,
  ]
}
