import { inject, Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Icons } from '@core/enums';

@Injectable()

export class IconsService {

  private readonly _matIconRegistry = inject(MatIconRegistry);
  private readonly _domSanitizer = inject(DomSanitizer);

  public onRegisterIcons(): void {
    this.load(Icons);
  }

  private load(icons: any): void {
    Object.keys(icons).forEach((icon) => {
      this._matIconRegistry.addSvgIcon(
        icon,
        this._domSanitizer.bypassSecurityTrustResourceUrl(`/images/${icons[icon]}.svg`)
      );
    });
  }

}
