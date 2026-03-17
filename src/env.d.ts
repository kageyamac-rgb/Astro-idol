---
import Layout from '../layouts/Layout.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import { Image } from 'astro:assets';

// 写真の代わりに、教室の空気感が伝わるようなイメージ画像
import pencilImg from '../assets/pencil.png'; 
---

<Layout title="代表挨拶 | 鳴滝塾">
  <Header />
  
  <main class="message-container">
    <section class="zigzag-section">
      <div class="content">
        <span class="sub-title">MESSAGE</span>
        <h2>代表挨拶</h2>
        
        <p>「勉強は、本当は楽しいものです。」</p>
        
        <p>
          今の教育現場では、どうしても「効率」や「偏差値」が優先されがちです。しかし、本来学びとは、自分の力で考え、未知の問いに答えを見つけていく、ワクワクするようなプロセスであるはずです。
        </p>
        
        <p>
          鳴滝塾では、どんぐり倶楽部の手法などを取り入れ、「ゆっくり・じっくり・丁寧に」思考する時間を大切にしています。答えを教えるのではなく、答えにたどり着くための「思考の体力」を育むこと。それが私たちの使命です。
        </p>

        <p>
          子供たちが、生涯にわたって学び続ける意欲を持ち、自らの足で歩んでいけるよう、私たちは全力でサポートしてまいります。
        </p>

        <p class="signature">
          鳴滝塾 代表<br>
          <strong>影山 正憲</strong>
        </p>
      </div>

      <div class="image-area">
        <Image src={pencilImg} alt="学びのイメージ" />
      </div>
    </section>

    <section class="action-area">
        <a href="/" class="yellow-back-btn">戻る</a>
    </section>
  </main>

  <Footer />
</Layout>

<style>
  /* 基本は About.astro のスタイルをそのまま適用 */
  .message-container {
    width: 100%;
    overflow-x: hidden;
    background-color: #fff;
  }

  /* メッセージページでは文章を立たせるため、少しだけ余白を調整 */
  .signature {
    margin-top: 3rem;
    text-align: right;
    font-size: 1.2rem;
  }
  .signature strong {
    font-size: 2rem;
    color: #001530;
  }

  .action-area {
    max-width: 900px;
    margin: 0 auto 100px;
    padding: 0 20px;
    display: flex;
    justify-content: flex-start;
  }

  /* 以前作成した .zigzag-section や .yellow-back-btn などのスタイルをここに貼り付け */
</style>
