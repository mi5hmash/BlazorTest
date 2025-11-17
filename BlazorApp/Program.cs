using BlazorApp;
using BlazorApp.Extensions;
using BlazorApp.Services;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Microsoft.JSInterop;

var builder = WebAssemblyHostBuilder.CreateDefault(args);

// Builder configuration shorthands
var rootComponents = builder.RootComponents;
var services = builder.Services;

// ROOT COMPONENTS
rootComponents.Add<App>("#app");
rootComponents.Add<HeadOutlet>("head::after");

// SERVICES
// Web Storage Manager
services.AddScoped(sp => new WebStorageManagerService(0xF17A59CB, sp.GetRequiredService<IJSRuntime>()));
// Theme Manager
services.AddScoped<ThemeManagerService>();
// Language Manager & Localization
services.AddScoped<LanguageManagerService>();
services.AddLocalization();
// HttpClient
services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

var host = builder.Build();

// Set the default Culture for Localization
await host.SetDefaultCulture();

await host.RunAsync();