using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace lebagarv.Migrations
{
    /// <inheritdoc />
    public partial class password_reset : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cars_CarBrand_CarBrandId",
                table: "Cars");

            migrationBuilder.DropForeignKey(
                name: "FK_Cars_CarColor_Color",
                table: "Cars");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CarColor",
                table: "CarColor");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CarBrand",
                table: "CarBrand");

            migrationBuilder.RenameTable(
                name: "CarColor",
                newName: "CarColors");

            migrationBuilder.RenameTable(
                name: "CarBrand",
                newName: "CarBrands");

            migrationBuilder.AddColumn<string>(
                name: "Banner",
                table: "Users",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "City",
                table: "Cars",
                type: "longtext",
                nullable: false)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CarColors",
                table: "CarColors",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CarBrands",
                table: "CarBrands",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "ResetPasswordTokens",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Email = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    ResetToken = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    ExpiryDate = table.Column<DateTime>(type: "datetime(6)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ResetPasswordTokens", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddForeignKey(
                name: "FK_Cars_CarBrands_CarBrandId",
                table: "Cars",
                column: "CarBrandId",
                principalTable: "CarBrands",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Cars_CarColors_Color",
                table: "Cars",
                column: "Color",
                principalTable: "CarColors",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cars_CarBrands_CarBrandId",
                table: "Cars");

            migrationBuilder.DropForeignKey(
                name: "FK_Cars_CarColors_Color",
                table: "Cars");

            migrationBuilder.DropTable(
                name: "ResetPasswordTokens");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CarColors",
                table: "CarColors");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CarBrands",
                table: "CarBrands");

            migrationBuilder.DropColumn(
                name: "Banner",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "City",
                table: "Cars");

            migrationBuilder.RenameTable(
                name: "CarColors",
                newName: "CarColor");

            migrationBuilder.RenameTable(
                name: "CarBrands",
                newName: "CarBrand");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CarColor",
                table: "CarColor",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CarBrand",
                table: "CarBrand",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Cars_CarBrand_CarBrandId",
                table: "Cars",
                column: "CarBrandId",
                principalTable: "CarBrand",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Cars_CarColor_Color",
                table: "Cars",
                column: "Color",
                principalTable: "CarColor",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
