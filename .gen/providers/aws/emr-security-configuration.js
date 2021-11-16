"use strict";
// https://www.terraform.io/docs/providers/aws/r/emr_security_configuration.html
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.EmrSecurityConfiguration = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_security_configuration.html aws_emr_security_configuration}
*/
var EmrSecurityConfiguration = /** @class */ (function (_super) {
    __extends(EmrSecurityConfiguration, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/emr_security_configuration.html aws_emr_security_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmrSecurityConfigurationConfig
    */
    function EmrSecurityConfiguration(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_emr_security_configuration',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._configuration = config.configuration;
        _this._name = config.name;
        _this._namePrefix = config.namePrefix;
        return _this;
    }
    Object.defineProperty(EmrSecurityConfiguration.prototype, "configuration", {
        get: function () {
            return this.getStringAttribute('configuration');
        },
        set: function (value) {
            this._configuration = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrSecurityConfiguration.prototype, "configurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._configuration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrSecurityConfiguration.prototype, "creationDate", {
        // creation_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('creation_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrSecurityConfiguration.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrSecurityConfiguration.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    EmrSecurityConfiguration.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(EmrSecurityConfiguration.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrSecurityConfiguration.prototype, "namePrefix", {
        get: function () {
            return this.getStringAttribute('name_prefix');
        },
        set: function (value) {
            this._namePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    EmrSecurityConfiguration.prototype.resetNamePrefix = function () {
        this._namePrefix = undefined;
    };
    Object.defineProperty(EmrSecurityConfiguration.prototype, "namePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namePrefix;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    EmrSecurityConfiguration.prototype.synthesizeAttributes = function () {
        return {
            configuration: cdktf.stringToTerraform(this._configuration),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    EmrSecurityConfiguration.tfResourceType = "aws_emr_security_configuration";
    return EmrSecurityConfiguration;
}(cdktf.TerraformResource));
exports.EmrSecurityConfiguration = EmrSecurityConfiguration;
