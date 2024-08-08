import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-tabs',
  templateUrl: './bottom-tabs.component.html',
  styleUrls: ['./bottom-tabs.component.scss']
})
export class BottomTabsComponent implements OnInit {
  selectedValue: any = "home";
  list: any = [
    { name: "home", icon: "tabbar__icon now-ui-icons shopping_shop", value: "home" },
    { name: "categories", icon: "tabbar__icon now-ui-icons design_palette", value: "categories" },
    { name: "tracking", icon: "tabbar__icon now-ui-icons location_pin", value: "tracking" },
    { name: "personalization", icon: "tabbar__icon now-ui-icons objects_spaceship", value: "personalization" },
    { name: "chat", icon: "tabbar__icon now-ui-icons ui-2_chat-round", value: "chat" },
  ]

  ngOnInit() {
  }
}
