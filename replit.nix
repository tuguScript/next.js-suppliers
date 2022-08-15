{ pkgs }: {
	deps = [
		pkgs.sqlite.bin
  pkgs.nodejs-16_x
        pkgs.nodePackages.typescript-language-server
        pkgs.nodePackages.yarn
        pkgs.replitPackages.jest
	];
}