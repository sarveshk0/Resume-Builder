import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Creative and Professional Resume Templates',
    description:
      'Our resume templates are ATS-friendly. It means your resume won’t automatically be rejected because an ATS can’t read it',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Make your resume fast',
    description:
      'Build your resume fast and easily with our online resume builder.Making a resume has never been easier.',
    icon: LockClosedIcon,
  },
  {
    name: 'Edit Your Resume in Real Time',
    description:
      'As you edit your resume with our builder, you’ll immediately see the changes applied to your document.',
    icon: ArrowPathIcon,
  },
  {
    name: 'NO Hidden Fees',
    description:
      'Our resume builder will notify you if you’re using any of our premium features in advance.',
    icon: FingerPrintIcon,
  },
]

export default function Features() {
  return (
    <div className="bg-blue-950  py-30 sm:py-32 font-serif">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Create Your Resume Fast and Easy
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-400 font-serif">
          Hassle-free resume maker that can help you land your dream job in any industry. Trusted by job seekers and HR experts. Build your resume quickly and easily today.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-200">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-400">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
