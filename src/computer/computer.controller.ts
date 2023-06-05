import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private cpuService: CpuService,
    private diskService: DiskService,
  ) {}
  @Get()
  run() {
    const compute = this.cpuService.compute(1, 2);
    const store = this.diskService.getData();
    return [compute, store];
  }
}
