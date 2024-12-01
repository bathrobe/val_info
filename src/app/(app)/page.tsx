import { getPayload } from 'payload'
import config from '../../payload.config'
import Image from 'next/image'
import { Media } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'

export default async function Home() {
  const payload = await getPayload({ config })
  const onePager = await payload.findGlobal({
    slug: 'onePager',
  })
  const isValidMedia = (media: Media | number): media is Media => {
    return typeof media !== 'number' && media.url !== undefined
  }

  // @ts-ignore
  const bannerImage = isValidMedia(onePager.bannerImage) ? onePager.bannerImage : null
  // @ts-ignore
  const avatarImage = isValidMedia(onePager.avatarImage) ? onePager.avatarImage : null

  return (
    <div className="min-h-screen">
      <div className="relative">
        {bannerImage && (
          <Image
            // @ts-ignore
            src={bannerImage.url}
            alt="Banner"
            width={1200}
            height={250} // Changed from 400 to 250
            className="w-full h-[250px] object-cover" // Changed from h-[400px] to h-[250px]
            priority
          />
        )}

        {avatarImage && (
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-16">
            {' '}
            {/* Changed from -bottom-20 to -bottom-16 */}
            <Image
              // @ts-ignore
              src={avatarImage.url}
              alt="Avatar"
              width={150}
              height={150}
              className="rounded-full border-4 border-white"
            />
          </div>
        )}
      </div>

      <div className="max-w-2xl mx-auto mt-20 px-4">
        {' '}
        {/* Changed from mt-24 to mt-20 */}
        <h1 className="text-4xl font-bold text-center mb-4">{onePager.title}</h1>
        <p className="text-xl text-center text-gray-600 mb-8">{onePager.subtitle}</p>
        {onePager.socialLinks && (
          <div className="flex flex-wrap justify-center gap-3">
            {onePager.socialLinks.map((link: any, i: number) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full 
                  bg-gray-800/80 hover:bg-cyan-500/20 
                  border border-gray-600 hover:border-cyan-400 
                  transition-all duration-200
                  text-gray-100 hover:text-cyan-50"
              >
                {link.icon && (
                  <Image
                    src={link.icon.url}
                    alt={`${link.displayName} social icon`}
                    width={20}
                    height={20}
                    className="w-5 h-5 opacity-90 group-hover:opacity-100"
                  />
                )}
                <span>{link.displayName}</span>
              </a>
            ))}
          </div>
        )}
        {onePager.letterText && (
          <div className="mt-12 prose prose-xl prose-invert mx-auto">
            <RichText
              data={onePager.letterText}
              // @ts-ignore
              customRenderers={{
                upload: ({ value }: { value: any }) => {
                  if (!value || typeof value === 'string') return null

                  return (
                    <div className={`my-8 ${value.alignment === 'center' ? 'text-center' : ''}`}>
                      <Image
                        src={value.url}
                        alt={value.alt || ''}
                        width={value.width || 800}
                        height={value.height || 600}
                        className="inline-block max-w-full h-auto"
                      />
                      {value.caption && (
                        <p className="mt-2 text-sm text-gray-400">{value.caption}</p>
                      )}
                    </div>
                  )
                },
              }}
            />
          </div>
        )}
        {onePager.featuredMedia && (
          <div className="mt-12 mx-auto max-w-2xl">
            <video controls className="w-full h-auto">
              {/* @ts-ignore */}
              <source src={onePager.featuredMedia.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
        <p className="text-center mt-6 mb-36 text-gray-400">{onePager.featuredMediaCaption}</p>
        {onePager.socialLinks && onePager.socialLinks.length > 0 && (
          <div className="my-12 flex flex-col items-center space-y-4">
            {onePager.socialLinks.map((link: any, index: number) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 text-lg px-6 py-3 bg-blue-900 text-white rounded-full hover:bg-blue-600 transition"
              >
                {link.icon && (
                  <Image
                    src={link.icon.url}
                    alt={link.icon.alt || ''}
                    width={30}
                    height={30}
                    className="w-7 h-7 opacity-90 group-hover:opacity-100"
                  />
                )}
                <span>{link.displayName}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
