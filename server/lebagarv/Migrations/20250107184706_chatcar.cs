using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace lebagarv.Migrations
{
    /// <inheritdoc />
    public partial class chatcar : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Chats_CarId",
                table: "Chats",
                column: "CarId");

            migrationBuilder.AddForeignKey(
                name: "FK_Chats_Cars_CarId",
                table: "Chats",
                column: "CarId",
                principalTable: "Cars",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Chats_Cars_CarId",
                table: "Chats");

            migrationBuilder.DropIndex(
                name: "IX_Chats_CarId",
                table: "Chats");
        }
    }
}
