import { Component, OnInit, AfterViewInit, ViewChildren, QueryList, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  videos = [
    { images: ["assets/img/dog_house_1.jpeg", "assets/img/dog_house_2.jpeg", "assets/img/dog_house_3.jpeg", "assets/img/dog_house_4.jpeg"], src: 'assets/video/MODEL_1.mp4', id: 'MODEL_1', name: "Dog Home", subtitle: "New and used Dog Houses for sale in Pune, India on Facebook Marketplace. Find great deals and sell your items for free." },
    { images: ["assets/img/dog_crate_1.jpeg", "assets/img/dog_crate_2.jpeg", "assets/img/dog_crate_3.jpeg", "assets/img/dog_crate_4.jpeg"], src: 'assets/video/MODEL_4.mp4', id: 'MODEL_4', name: "Dog Crate", subtitle: "Midwest Homes for Pets Dog Crates Cage Kennel 42 Inch - Spacious And Secure Crate For Large Adult Dogs (107X74X84 Cm) - Robust Metal Construction - Portable." },
    { images: ["assets/img/play_pen_1.jpeg", "assets/img/play_pen_2.jpeg", "assets/img/play_pen_3.jpeg", "assets/img/play_pen_4.jpeg"], src: 'assets/video/MODEL_2.mp4', id: 'MODEL_2', name: "Puppy Play Pen", subtitle: "RvPaws Foldable Metal Pet Dog Exercise Fence Pen with Gate, Foldable Metal Dog Fence, Indoor/Outdoor Enclosure with Gate for Dogs, Color Silver Black," },
    { images: ["assets/img/dog_gate_1.jpeg", "assets/img/dog_gate_2.jpeg", "assets/img/dog_gate_3.jpeg", "assets/img/dog_gate_4.jpeg"], src: 'assets/video/MODEL_3.mp4', id: 'MODEL_3', name: "Dog Gate", subtitle: "WoodCraftia Wooden Freestanding Foldable Safety Gate - Portable Pet Fence for Doorways, Stairs for Kids and Dogs - L-54 x H-22 Inch, 3-Panel (X Design - Brown)." },
  ];

  @ViewChildren('reel')
  reels!: QueryList<ElementRef>;
  currentVideoId!: string;

  constructor(private renderer: Renderer2) {

  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    // const options = {
    //   root: null,
    //   rootMargin: '0px',
    //   threshold: 0.5
    // };

    // const observer = new IntersectionObserver((entries, observer) => {
    //   entries.forEach(entry => {
    //     const video: any = entry.target.querySelector('video');
    //     if (entry.isIntersecting) {
    //       video.play();
    //       this.currentVideoId = video.id;
    //       console.log('Current Video ID:', this.currentVideoId); // Log the current video ID
    //     } else {
    //       video.pause();
    //     }
    //   });
    // }, options);

    // this.reels.forEach(reel => {
    //   observer.observe(reel.nativeElement);
    // });
  }

  onScroll() {
    const reels = document.querySelectorAll('.reel');
    let currentReelId = '';

    reels.forEach(reel => {
      const rect = reel.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight) {
        currentReelId = reel.id;
      }
    });

    if (currentReelId) {
      console.log('Currently visible reel ID:', currentReelId);
      // You can now use currentReelId as needed in your component
    }
  }
}
