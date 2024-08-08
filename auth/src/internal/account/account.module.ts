import { Module } from "@nestjs/common";
import { InternalAccountService } from "./account.service";
import { HttpModule } from "@nestjs/axios";

@Module({
    imports: [HttpModule],
    providers: [InternalAccountService],
    exports: [InternalAccountService]
})
export class AccountModule {}