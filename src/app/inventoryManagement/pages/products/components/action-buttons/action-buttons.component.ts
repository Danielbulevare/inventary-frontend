import { Component, inject } from '@angular/core';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

const ADD_ICON = `<svg viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>add-circle-filled</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="drop" fill="#AC0B0B" transform="translate(42.666667, 42.666667)"> <path d="M213.333333,3.55271368e-14 C269.912851,3.55271368e-14 324.175019,22.4761259 364.18278,62.4838867 C404.190541,102.491647 426.666667,156.753816 426.666667,213.333333 C426.666667,331.15408 331.15408,426.666667 213.333333,426.666667 C95.5125867,426.666667 3.55271368e-14,331.15408 3.55271368e-14,213.333333 C3.55271368e-14,95.5125867 95.5125867,3.55271368e-14 213.333333,3.55271368e-14 Z M234.666667,106.666667 L192,106.666667 L192,192 L106.666667,192 L106.666667,234.666667 L192,234.666 L192,320 L234.666667,320 L234.666,234.666 L320,234.666667 L320,192 L234.666,192 L234.666667,106.666667 Z" id="add-workorder"> </path> </g> </g> </g></svg>`;
const SEARCH_ICON = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#AC0B0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
const EDIT_ICON = `<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" viewBox="0 0 30 30" version="1.1" id="svg822" inkscape:version="0.92.4 (f8dce91, 2019-08-02)" sodipodi:docname="edit.svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs id="defs816"></defs> <sodipodi:namedview id="base" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="8.9166667" inkscape:cx="8.0836903" inkscape:cy="28.276327" inkscape:document-units="px" inkscape:current-layer="layer1" showgrid="true" units="px" inkscape:window-width="1366" inkscape:window-height="713" inkscape:window-x="0" inkscape:window-y="0" inkscape:window-maximized="1" showguides="false"> <inkscape:grid type="xygrid" id="grid816"></inkscape:grid> </sodipodi:namedview> <metadata id="metadata819"> <rdf:rdf> <cc:work rdf:about=""> <dc:format>image/svg+xml</dc:format> <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type> <dc:title> </dc:title> </cc:work> </rdf:rdf> </metadata> <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1" transform="translate(0,-289.0625)"> <path style="opacity:0.93000034;fill:#AC0B0B;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 22.82375,296.23874 c -0.483112,-0.48311 -1.002636,-0.90402 -1.541272,-1.28715 l -2.665461,2.66546 2.828427,2.82843 2.665461,-2.66547 c -0.383131,-0.53863 -0.804044,-1.05816 -1.287155,-1.54127 z m -5.620947,2.79252 -10.6066015,10.6066 -0.7071068,3.53554 3.5355335,-0.70711 10.6066018,-10.6066 z" id="rect1114" inkscape:connector-curvature="0"></path> </g> </g></svg>`;

@Component({
  selector: 'app-action-buttons',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatTooltipModule],
  templateUrl: './action-buttons.component.html',
  styleUrl: './action-buttons.component.css',
})
export class ActionButtonsComponent {
  constructor() {
    const iconRegistry = inject(MatIconRegistry);
    const sanitizer = inject(DomSanitizer);

    iconRegistry.addSvgIconLiteral(
      'add_icon',
      sanitizer.bypassSecurityTrustHtml(ADD_ICON)
    );

    iconRegistry.addSvgIconLiteral(
      'search_icon',
      sanitizer.bypassSecurityTrustHtml(SEARCH_ICON)
    );

    iconRegistry.addSvgIconLiteral(
      'edit_icon',
      sanitizer.bypassSecurityTrustHtml(EDIT_ICON)
    );
  }
}
