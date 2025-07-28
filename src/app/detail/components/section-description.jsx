import { BodyText } from '@/components';
import React from 'react'

const SectionDescription = () => {

  const pengalamanKuliah = `Kuliah di Universitas Teknologi Bandung (UTB) tuh rasanya campur aduk—antara seru, capek, tapi nagih juga. Dari awal masuk udah kerasa banget atmosfernya beda. Suasananya rame tapi produktif, apalagi kalau udah masuk minggu-minggu UTS atau UAS... chaos banget, tapi seru kalau dikenang.

Fasilitas kampusnya oke punya. Ada banyak spot buat belajar, diskusi, atau sekadar ngopi sambil nunggu kelas. Lab-labnya juga lengkap, terutama buat yang suka ngoprek atau eksperimen. Pokoknya buat kamu yang suka hal-hal teknis, UTB itu surganya.
  
Yang bikin betah juga, lingkungannya mendukung banget. Banyak komunitas seru, dari yang serius kayak robotik sampai yang santai kayak pecinta kopi. Belajar jadi nggak cuma di kelas, tapi juga dari nongkrong bareng teman dan ikut kegiatan kampus.
  
Dan ya, harus diakui, tugasnya lumayan nggak ada ampun. Tapi di balik itu, justru jadi banyak belajar manajemen waktu, kerja tim, dan pastinya ngelatih mental tahan banting 😄
  
Ngampus di UTB itu bukan cuma soal dapet gelar, tapi juga soal perjalanan tumbuh jadi versi diri sendiri yang lebih kuat, kreatif, dan siap tempur di dunia nyata.`;
  
  return (
    <section>
      <div className="main-container max-w-[996px] mx-auto pt-14 pb-4 px-4 lg:px-0">
        <div className="text-container max-w-[700px]">
          <BodyText variant='lg' classname={'text-stone-900 whitespace-pre-wrap'}>{pengalamanKuliah}</BodyText>
        </div>
      </div>
    </section>
  )
}

export default SectionDescription