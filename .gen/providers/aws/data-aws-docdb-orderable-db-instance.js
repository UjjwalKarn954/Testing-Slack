"use strict";
// https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance.html
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
exports.DataAwsDocdbOrderableDbInstance = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance.html aws_docdb_orderable_db_instance}
*/
var DataAwsDocdbOrderableDbInstance = /** @class */ (function (_super) {
    __extends(DataAwsDocdbOrderableDbInstance, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance.html aws_docdb_orderable_db_instance} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDocdbOrderableDbInstanceConfig = {}
    */
    function DataAwsDocdbOrderableDbInstance(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_docdb_orderable_db_instance',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._engine = config.engine;
        _this._engineVersion = config.engineVersion;
        _this._instanceClass = config.instanceClass;
        _this._licenseModel = config.licenseModel;
        _this._preferredInstanceClasses = config.preferredInstanceClasses;
        _this._vpc = config.vpc;
        return _this;
    }
    Object.defineProperty(DataAwsDocdbOrderableDbInstance.prototype, "availabilityZones", {
        // ==========
        // ATTRIBUTES
        // ==========
        // availability_zones - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('availability_zones');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDocdbOrderableDbInstance.prototype, "engine", {
        get: function () {
            return this.getStringAttribute('engine');
        },
        set: function (value) {
            this._engine = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsDocdbOrderableDbInstance.prototype.resetEngine = function () {
        this._engine = undefined;
    };
    Object.defineProperty(DataAwsDocdbOrderableDbInstance.prototype, "engineInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._engine;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDocdbOrderableDbInstance.prototype, "engineVersion", {
        get: function () {
            return this.getStringAttribute('engine_version');
        },
        set: function (value) {
            this._engineVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsDocdbOrderableDbInstance.prototype.resetEngineVersion = function () {
        this._engineVersion = undefined;
    };
    Object.defineProperty(DataAwsDocdbOrderableDbInstance.prototype, "engineVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._engineVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDocdbOrderableDbInstance.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDocdbOrderableDbInstance.prototype, "instanceClass", {
        get: function () {
            return this.getStringAttribute('instance_class');
        },
        set: function (value) {
            this._instanceClass = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsDocdbOrderableDbInstance.prototype.resetInstanceClass = function () {
        this._instanceClass = undefined;
    };
    Object.defineProperty(DataAwsDocdbOrderableDbInstance.prototype, "instanceClassInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceClass;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDocdbOrderableDbInstance.prototype, "licenseModel", {
        get: function () {
            return this.getStringAttribute('license_model');
        },
        set: function (value) {
            this._licenseModel = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsDocdbOrderableDbInstance.prototype.resetLicenseModel = function () {
        this._licenseModel = undefined;
    };
    Object.defineProperty(DataAwsDocdbOrderableDbInstance.prototype, "licenseModelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._licenseModel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDocdbOrderableDbInstance.prototype, "preferredInstanceClasses", {
        get: function () {
            return this.getListAttribute('preferred_instance_classes');
        },
        set: function (value) {
            this._preferredInstanceClasses = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsDocdbOrderableDbInstance.prototype.resetPreferredInstanceClasses = function () {
        this._preferredInstanceClasses = undefined;
    };
    Object.defineProperty(DataAwsDocdbOrderableDbInstance.prototype, "preferredInstanceClassesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._preferredInstanceClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDocdbOrderableDbInstance.prototype, "vpc", {
        get: function () {
            return this.getBooleanAttribute('vpc');
        },
        set: function (value) {
            this._vpc = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsDocdbOrderableDbInstance.prototype.resetVpc = function () {
        this._vpc = undefined;
    };
    Object.defineProperty(DataAwsDocdbOrderableDbInstance.prototype, "vpcInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpc;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsDocdbOrderableDbInstance.prototype.synthesizeAttributes = function () {
        return {
            engine: cdktf.stringToTerraform(this._engine),
            engine_version: cdktf.stringToTerraform(this._engineVersion),
            instance_class: cdktf.stringToTerraform(this._instanceClass),
            license_model: cdktf.stringToTerraform(this._licenseModel),
            preferred_instance_classes: cdktf.listMapper(cdktf.stringToTerraform)(this._preferredInstanceClasses),
            vpc: cdktf.booleanToTerraform(this._vpc)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsDocdbOrderableDbInstance.tfResourceType = "aws_docdb_orderable_db_instance";
    return DataAwsDocdbOrderableDbInstance;
}(cdktf.TerraformDataSource));
exports.DataAwsDocdbOrderableDbInstance = DataAwsDocdbOrderableDbInstance;
